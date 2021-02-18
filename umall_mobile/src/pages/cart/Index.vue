<template>
  <div>
    <u-header title="购物车" />
    <u-cart-list :cartList = "cartList"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UHeader from '@/components/Header'
import UCartList from './components/CartList'
export default {
  components: {
    UHeader,
    UCartList
  },
  computed: {
    ...mapState({
      cartList: (state) => state.cart.list
    })
  },
  mounted () {
    if (this.cartList.length === 0) {
      this.$store.dispatch('cart/getCartList')
    }
  }
}
</script>

<style>
</style>
