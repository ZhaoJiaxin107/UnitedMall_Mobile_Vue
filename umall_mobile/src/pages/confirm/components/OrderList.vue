<template>
  <div>
    <div class="wrapconfirm" v-for="item of orderList" :key="item.id">
      <!-- product info and price -->
      <div class="productinfoandprice">
        <div class="productinfo">
          <img :src="item.img | recombinationImg" alt="item" />
          <div class="desc">
            <h3>{{ item.goodsname }}</h3>
            <h4>规格属性:{{ item.specsattr }}</h4>
          </div>
        </div>
        <div class="price">
          <h3><b>￥</b>{{ item.market_price }}</h3>
        </div>
      </div>

      <!-- purchase number -->
      <div class="purchasenumber">
        <h3>购买数量:</h3>
        <div class="number">
          <i class="minus iconfont icon-jianhao"></i>
          <input type="text" :value="item.num" />
          <i class="plus iconfont icon-jiahao1"></i>
        </div>
      </div>
    </div>
    <!-- delivery method -->
    <div class="wrapconfirm">
    <div class="deliverymethod">
      <h3>配送方式</h3>
      <h3>顺丰速运</h3>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderList: Array
  }
}
</script>

<style>
</style>
