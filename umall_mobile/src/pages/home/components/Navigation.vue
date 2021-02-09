<template>
  <nav>
        <ul class="list">
          <li v-for = "item of list"
          :key="item.id"
          ><a href="#">{{item.catename}}</a></li>
          <i class="downarrow iconfont">&#xe60a;</i>
        </ul>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      list: 'category/firstCategoryList'
    })
  },
  mounted () {
    // 判断是否有菜单数据
    if (this.list.length === 0) {
      this.$store.dispatch('category/getCategoryList')
    }
  }

}
</script>

<style>

</style>
