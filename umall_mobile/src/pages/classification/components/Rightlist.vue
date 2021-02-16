<template>
  <div class="rightlist">
    <!-- wash hair -->
    <div class="category">
      <!-- list -->
      <ul class="list">
        <li v-for = "item of list" :key = "item.id">
          <router-link :to = "`/goodslist/${item.id}/${firstCateName}-${item.catename}`">
            <img v-if = "item.img !==''" :src="item.img | recombinationImg" alt="item" />
            <span>{{item.catename}}</span>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    list: Array, // 商品列表数据
    firstCateName: String // 一级分类的名称
  }
}
</script>

<style scoped>
</style>
