<template>
  <u-header title = "购物车"/>
</template>

<script>
import UHeader from '@/components/Header'
import { mapState } from 'vuex'
export default {
  components: {
    UHeader
  },
  computed: {
    ...mapState({
      list: state => state.cart.list
    })
  },
  mounted () {
    if (this.list.length === 0) {
      this.$store.dispatch('cart/getCartList')
    }
  }
}
</script>

<style>

</style>
