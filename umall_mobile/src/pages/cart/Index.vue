<template>
  <div>
    <u-header title="购物车" />
    <u-cart-list :cartList = "cartList"/>
    <u-check />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UHeader from '@/components/Header'
import UCartList from './components/CartList'
import UCheck from './components/Check'
export default {
  components: {
    UHeader,
    UCartList,
    UCheck
  },
  computed: {
    ...mapState({
      cartList: (state) => state.cart.list
    })
  },
  mounted () {
    // 重新获取购物车数据
    if (this.cartList.length === 0) {
      this.$store.dispatch('cart/getCartList')
    }
  }
}
</script>

<style>
</style>
