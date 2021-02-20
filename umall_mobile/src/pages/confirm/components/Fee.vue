<template>
      <div class="wrapconfirm">
        <div class="productfee">
            <ul class="leftitem">
                <li>商品金额</li>
                <li>运费</li>
                <li>优惠券</li>
                <li>会员优惠</li>
                <li>积分抵扣</li>
            </ul>
            <ul class="rightamount">
                <li>￥{{orginPrice}}</li>
                <li>+ ￥{{carryFee.toFixed(2)}}</li>
                <li>- ￥{{coupon.toFixed(2)}}</li>
                <li>- ￥{{discountPrice}}</li>
                <li>- ￥{{integral.toFixed(2)}}</li>
            </ul>
        </div>

        <div class="amountpurchase">
            实付金额 ：<em> ￥{{actualPrice}}</em>
        </div>

        <!-- button submit -->
        <div class="submit">
            <button type="submit">提交订单</button>
        </div>

        <div class="add"></div>
    </div>
</template>

<script>
export default {
  props: {
    orderList: Array
  },
  computed: {
    orginPrice () {
      let originTotal = 0
      this.orderList.forEach((item) => {
        originTotal += item.price * item.num
      })
      return originTotal.toFixed(2)
    },
    discountPrice () {
      let discount = 0
      this.orderList.forEach((item) => {
        discount += (item.price - item.market_price) * item.num
      })
      return discount.toFixed(2)
    },
    actualPrice () {
      let actualTotal = this.orginPrice + this.carryFee - this.coupon - this.discountPrice - this.integral
      return actualTotal.toFixed(2)
    }
  },
  data () {
    return {
      carryFee: 10,
      coupon: 0, // 优惠券
      integral: 50 // 积分
    }
  }

}
</script>

<style>

</style>
