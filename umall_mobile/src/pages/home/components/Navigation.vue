<template>
  <nav>
        <ul class="list">
          <li><a href="#">推荐</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">鞋包</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">母婴儿童</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">男装</a></li>
          <li><a href="#">运动</a></li>
          <li><a href="#">品牌</a></li>
          <li><a href="#">奥莱</a></li>
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
