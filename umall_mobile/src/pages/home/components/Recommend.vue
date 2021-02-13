<template>
  <div class="wrap">
    <van-tabs type="card" color="#f26b11"
    class="tabs">
      <van-tab title="热门推荐">
        <u-goods-list :list = "list1"/>
      </van-tab>
      <van-tab title="发现好货"></van-tab>
      <van-tab title="只看专场"></van-tab>
      <van-tab title="只看商品"></van-tab>
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
      list1: state => state.goods.list
    })
  },
  mounted () {
    if (this.list1.length === 0) {
      // 重新获取商品数据
      this.$store.dispatch('goods/getGoodsList')
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
