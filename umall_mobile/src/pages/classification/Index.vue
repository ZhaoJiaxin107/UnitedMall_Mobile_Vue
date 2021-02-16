<template>
  <div>
    <u-header title="商品分类" />
    <!-- main -->
    <main>
      <!-- leftnav -->
      <u-left-nav
      :classification = "classification"
      :fid = "fid"
      @changeFid = "changeFid"/>
      <!-- rightlist -->
      <u-right-list />
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
    classification (newClass) {
      this.fid = newClass[0].id || 2
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
    changeFid (id) {
      this.fid = id
    }
  }
}
</script>

<style>
/* 引入商品分类的样式 */
@import url("../../assets/css/classification.css");
</style>
