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
      :list = "secondCategory"
      :firstCateName = "firstCateName"/>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import UHeader from '@/components/Header'
import ULeftNav from './components/LeftNav'
import URightList from './components/RightList'
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
      // 一级分类的名称
      this.firstCateName = newClass[0].catename || '' // 一级分类名称
      // 找到第一个分类的二级分类
      this.secondCategory = newClass[0].children || []
      // console.log(this.secondCategory)
    }
  },
  data () {
    return {
      fid: 2, // 当前点击的一级分类的id
      firstCateName: '', // 一级分类的名称
      secondCategory: []
    }
  },
  mounted () {
    if (this.list.length === 0) {
      this.$store.dispatch('category/getCategoryList')
    } else {
      // 给fid和secondCategory赋值
      this.fid = this.list[0].fid || 2
      // 找到第一个一级分类名称
      this.firstCateName = this.list[0].catename || '' // 一级分类名称
      // 找到第一个分类的二级分类
      this.secondCategory = this.list[0].children || []
    }
  },
  methods: {
    changeCategory (id) {
      this.fid = id
      // 找到对应的一级分类
      const classification = this.list.find(item => item.id === id)
      // 获取对应的一级分类的名称
      this.firstCateName = classification.catename
      // 获取对应的二级分类
      this.secondCategory = classification.children || []
    }
  }
}
</script>

<style>
/* 引入商品分类的样式 */
@import url("../../assets/css/classification.css");
</style>
