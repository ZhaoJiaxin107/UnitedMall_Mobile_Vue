import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/Index')
    },
    {
      path: '/login',
      meta: {
        title: '用户登录'
      },
      component: () => import('@/pages/login/Index')
    },
    {
      path: '/cart',
      meta: {
        title: '购物车',
        checkLogin: true // 是否需要进行登录的判断
      },
      component: () => import('@/pages/cart/Index')
    },
    {
      path: '/mine',
      meta: {
        title: '我的',
        checkLogin: true // 是否需要进行登录的判断
      },
      component: () => import('@/pages/mine/Index')
    },
    {
      path: '/classification',
      meta: {
        title: '商品分类'
      },
      component: () => import('@/pages/classification/Index')
    }
  ],
  mode: 'history'
})

// 拦截
// router.beforeEach((to, from, next) => {
//   // 设置页面标题
//   document.title = to.meta.title || 'United Mall(U.MOBILE.COM)'
// })

export default router
