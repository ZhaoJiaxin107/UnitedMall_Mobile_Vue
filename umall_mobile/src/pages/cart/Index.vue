<template>
  <div>
    <u-header title="购物车" />
    <u-cart-list :cartList = "cartList" @delete = "deleteItem"/>
    <u-check />
    <div class = "addpadding"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from 'vant'
import { deleteCart } from '@/api/cart'
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
  },
  methods: {
    deleteItem (id) {
      if (confirm('确定要删除吗?')) {
        deleteCart(id).then(() => {
          Toast.success('删除成功')
          // 重新刷新列表
          this.$store.dispatch('cart/getCartList')
        }).catch(() => {
          Toast.fail('删除失败')
        })
      }
    }
  }
}
</script>

<style scoped>
.addpadding {
  height: 2.4rem;
  width: 100%;
}
</style>
