<template>
   <div class="wrapconfirm">
        <!-- discount -->
        <div class="deliverymethod">
            <h3>优惠券</h3>
            <h3 v-if = "coupon === 0">无可用</h3>
            <h3 v-else>可用{{coupon.toFixed(2)}}</h3>
        </div>

        <!-- credituse -->
        <div class="credituse">
            <h3>使用积分</h3>
            <div class="credit">
                <input type="text" placeholder="输入积分">
                <button>使用</button>
                <span>可用<em>{{integral}}</em>积分</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  props: {
    coupon: Number,
    integral: Number
  }
}
</script>

<style>

</style>
