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
        finished-text="没有更多了"
        @load="onLoad">
          <u-goods-list :goodsList = "goodsList"/>
        </van-list>
        <div class="add"></div>
    </div>
</template>

<script>
import { getGoodsList } from '@/api/goods'
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
  data () {
    return {
      title: '',
      cateId: 0, // 当前分类id
      loading: false, // 是否正在加载
      goodsList: [], // 商品列表数据
      finished: false, // 是否结束加载(没有更多数据了)
      total: 0 // 加载的商品数量
    }
  },
  mounted () {
    this.title = this.$route.params.name || '商品列表'
    this.cateId = parseInt(this.$route.params.id) // 接收路由参数
  },
  methods: {
    clearList () {
      this.goodsList = []
      this.total = 0
    },
    onLoad () {
      // console.log('onLoad')
      setTimeout(() => {
        getGoodsList(this.cateId).then(res => {
          this.total = res.length
          for (let i = 0; i < this.total; i++) {
            this.goodsList.push(res[i])
          }
          // 加载状态结束
          this.loading = false
          // 数据全部加载完成
          if (this.goodsList.length >= this.total) {
            this.finished = true
          }
        }).catch(err => {
          console.log(err)
        })
      }, 1000)
    }
  }
}
</script>

<style>
/* 引入商品列表的样式 */
@import url("../../assets/css/list.css");
</style>
