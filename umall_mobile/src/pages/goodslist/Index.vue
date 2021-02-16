<template>
   <!-- header -->
    <div class="wrap">
        <!-- top -->
        <u-header />
        <!-- search -->
        <u-search />
        <!-- listpanel -->
        <u-goods-list :goodsList = "goodsList"/>
        <div class="add"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import UHeader from './components/Header'
import USearch from './components/Search'
import UGoodsList from './components/Goodslist'
export default {
  components: {
    UHeader,
    USearch,
    UGoodsList
  },
  computed: {
    ...mapState({
      goodsList: state => state.goods.goodsList
    })
  },
  data () {
    return {
      title: '',
      cateId: 0 // 当前分类id
    }
  },
  mounted () {
    this.title = this.$route.params.name || '商品列表'
    this.cateId = parseInt(this.$route.params.id) // 接收路由参数
    this.$store.dispatch('goods/getGoodsList', { id: this.cateId })
  }

}
</script>

<style>
/* 引入商品列表的样式 */
@import url("../../assets/css/list.css");
</style>
