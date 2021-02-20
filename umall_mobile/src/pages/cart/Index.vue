<template>
  <div>
    <u-header title="购物车" />
    <u-cart-list
    :cartList = "cartList"
    @delete = "deleteItem"
    :length = "cartList.length"/>

    <div class = "addpadding"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast, Dialog } from 'vant'
import { deleteCart } from '@/api/cart'
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
    // 重新获取购物车数据
    if (this.cartList.length === 0) {
      this.$store.dispatch('cart/getCartList')
    }
  },
  methods: {
    deleteItem (id) {
      Dialog.confirm({
        message: '确定要删除吗？'
      }).then(() => {
        deleteCart(id).then(() => {
          Toast.success('删除成功')
          // 重新刷新列表
          this.$store.dispatch('cart/getCartList')
        }).catch(() => {
          Toast.fail('删除失败')
        })
      }).catch(() => {
      })
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
