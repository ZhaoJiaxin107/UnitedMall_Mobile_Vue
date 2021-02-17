<template>
   <!-- header -->
    <div class="wrap">
        <!-- top -->
        <u-header @clearlist = "clearList"/>
        <!-- search -->
        <u-search />
        <!-- listpanel -->
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="Finished"
        @load="onLoad">
          <u-goods-list :goodsList = "goodsList"/>
        </van-list>
        <div class="add"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { List } from 'vant'
import UHeader from './components/Header'
import USearch from './components/Search'
import UGoodsList from './components/Goodslist'
export default {
  components: {
    UHeader,
    USearch,
    UGoodsList,
    VanList: List
  },
  computed: {
    ...mapState({
      goodsList: state => state.goods.goodsList
    })
  },
  data () {
    return {
      title: '',
      cateId: 0, // 当前分类id
      loading: false, // 是否正在加载
      finished: false // 是否结束加载(没有更多数据了)
    }
  },
  mounted () {
    this.title = this.$route.params.name || '商品列表'
    this.cateId = parseInt(this.$route.params.id) // 接收路由参数
    this.$store.dispatch('goods/getGoodsList', { id: this.cateId })
  },
  methods: {
    clearList () {
      this.$store.dispatch('goods/getGoodsList', { id: 0 })
    },
    onLoad () {
      console.log('onLoad')
    }
  }

}
</script>

<style>
/* 引入商品列表的样式 */
@import url("../../assets/css/list.css");
</style>
