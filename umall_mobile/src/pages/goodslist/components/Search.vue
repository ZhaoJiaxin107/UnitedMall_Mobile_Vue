<template>
  <div class="searchnav">
    <form action="#" method="get">
      <div class="search">
        <img src="/static/images/iconimg/search.jpg" alt="search" />
        <input type="text"
        placeholder="搜索商品"
        v-model.lazy.trim="keyword"
        @change="search"
        autofocus />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '' // 搜索关键词
    }
  },
  methods: {
    search () {
      // 将keyword传递给父组件
      // console.log(this.keyword)
      this.$emit('search', this.keyword)
    }
  }
}
</script>

<style>
</style>
