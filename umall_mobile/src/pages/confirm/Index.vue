<template>
  <div>
    <u-header title = "确认订单"/>
    <!-- address -->
    <u-address />
    <!-- padding -->
    <div class="padding"></div>

    <!-- order list -->
    <u-order-list
    :orderList = "orderList"
    @reduce = "reduceNum"
    @add = "addNum"/>
    <!-- padding -->
    <div class="padding"></div>

    <!-- discont | credit use -->
    <u-discount
    :coupon = "coupon"
    :integral = "integral"/>
    <!-- padding -->
    <div class="padding"></div>

    <!-- fee -->
    <u-fee
    :orderList = "orderList"
    :carryFee = "carryFee"
    :coupon = "coupon"
    :integral = "integral"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UHeader from '@/components/Header'
import UAddress from './components/Address'
import UOrderList from './components/OrderList'
import UDiscount from './components/Discount'
import UFee from './components/Fee'
export default {
  components: {
    UHeader,
    UAddress,
    UOrderList,
    UDiscount,
    UFee
  },
  computed: {
    ...mapState({
      orderList: (state) => state.cart.list
    })
  },
  mounted () {
    // 重新获取订单数据
    if (this.orderList.length === 0) {
      this.$store.dispatch('cart/getCartList')
    }
  },
  data () {
    return {
      carryFee: 10, // 运费
      coupon: 0, // 优惠券
      integral: 50 // 积分
    }
  },
  methods: {
    addNum (id) {
      const order = this.orderList.find((item) => item.goodsid === id)
      order.num++
    },
    reduceNum (id) {
      const order = this.orderList.find((item) => item.goodsid === id)
      if (order.num > 1) order.num--
    }
  }
}
</script>

<style>
/* 引入确认订单的样式 */
@import url("../../assets/css/confirmorder.css");
</style>
