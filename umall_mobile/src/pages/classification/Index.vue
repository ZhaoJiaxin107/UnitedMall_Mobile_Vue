<template>
  <div>
    <u-header title="商品分类" />
    <!-- main -->
    <main>
      <!-- leftnav -->
      <u-left-nav
      :classification = "classification"
      :fid = "fid"
      @changeCate = "changeCategory"/>
      <!-- rightlist -->
      <u-right-list
      :list = "secondCategory"/>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import UHeader from '@/components/Header'
import ULeftNav from './components/Leftnav'
import URightList from './components/Rightlist'
export default {
  components: {
    UHeader,
    ULeftNav,
    URightList
  },
  computed: {
    ...mapState({
      list: state => state.category.list // 所有的分类数据
    }),
    ...mapGetters({
      classification: 'category/firstCategoryList' // 一级分类
    })
  },
  watch: {
    list (newClass) {
      this.fid = newClass[0].id || 2
      // 找到第一个分类的二级分类
      this.secondCategory = newClass[0].children || []
    }
  },
  data () {
    return {
      fid: 2, // 当前点击的一级分类的id
      secondCategory: [] // 二级分类
    }
  },
  mounted () {
    if (this.list.length === 0) {
      this.$store.dispatch('category/getCategoryList')
    }
  },
  methods: {
    changeCategory (id) {
      this.fid = id
      // 找到对应的一级分类
      const classification = this.list.find(item => item.id === id)
      this.secondCategory = classification.children || []
    }
  }
}
</script>

<style>
/* 引入商品分类的样式 */
@import url("../../assets/css/classification.css");
</style>
