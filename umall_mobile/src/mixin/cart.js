// 全局的mixin
import Vue from 'vue'
import { addCart } from '@/api/cart'
import { Toast } from 'vant'
Vue.mixin({
  methods: {
    // 添加购物车
    addCart (goodsId, purchaseNum = 1) {
      // 获取用户信息
      let userInfo = sessionStorage.getItem('user')
      if (!userInfo) {
        // 没有登录， 不允许添加购物车
        Toast.fail('没有登录, 不允许添加购物车')
        return
      }
      // 转化成对象
      userInfo = JSON.parse(userInfo)
      // 添加购物车
      addCart(userInfo.uid, goodsId, purchaseNum).then(() => {
        Toast.success('添加成功')
      }).catch(err => {
        Toast.fail(err.message)
      })
    }
  }
})
