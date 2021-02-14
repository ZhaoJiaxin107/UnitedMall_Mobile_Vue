<template>
  <div class="wrap">
    <van-tabs type="card" color="#f26b11"
    class="tabs">
      <van-tab title="热门推荐">
        <u-goods-list :list = "list.hot"/>
      </van-tab>
      <van-tab title="发现好货">
        <u-goods-list :list = "list.new"/>
      </van-tab>
      <van-tab title="只看商品">
        <u-goods-list :list = "list.all"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import { mapState } from 'vuex'
import UGoodsList from './GoodsList'
export default {
  components: {
    VanTab: Tab,
    VanTabs: Tabs,
    UGoodsList
  },
  computed: {
    ...mapState({
      list: state => state.goods.indexList
    })
  },
  mounted () {
    // sessionStorage.setItem('user', JSON.stringify({uid: '8c08bf80-6e98-11eb-8393-0b0654bb2001'}))
    if (this.list.length === 0) {
      // 重新获取商品数据
      this.$store.dispatch('goods/getIndexGoods')
    }
  }
}
</script>

<style>
.van-tabs__wrap {
  margin: .2rem 0;
  width: 100%;
}
</style>
