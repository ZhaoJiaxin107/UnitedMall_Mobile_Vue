<template>
  <div>
    <u-header title = "确认订单"/>
    <!-- address -->
    <u-address />
    <!-- padding -->
    <div class="padding"></div>

    <!-- order list -->
    <u-order-list />
    <!-- padding -->
    <div class="padding"></div>

    <!-- discont | credit use -->
    <u-discount />
    <!-- padding -->
    <div class="padding"></div>

    <!-- fee -->
    <u-fee />
  </div>
</template>

<script>
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
  }
}
</script>

<style>
/* 引入确认订单的样式 */
@import url("../../assets/css/confirmorder.css");
</style>
