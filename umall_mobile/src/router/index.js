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
      path: '/register',
      meta: {
        title: '用户注册'
      },
      component: () => import('@/pages/register/Index')
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
      path: '/confirm',
      meta: {
        title: '确认订单',
        checkLogin: true // 是否需要进行登录的判断
      },
      component: () => import('@/pages/confirm/Index')
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
    },
    {
      path: '/goodslist/:id/:name',
      meta: {
        title: '商品列表'
      },
      component: () => import('@/pages/goodslist/Index')
    }
  ],
  mode: 'history'
})

// 拦截, 创建导航守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'United Mall(U.MOBILE.COM)'
  // 获取是否需要进行登录
  const checkLogin = to.meta.checkLogin || false
  if (checkLogin) {
    // 需要验证登录
    const userInfo = sessionStorage.getItem('user')
    if (!userInfo) {
      // 没有登录
      next('/login')
    } else {
      // 已经登录
      next()
    }
  } else {
    // 不需要验证登录
    next()
  }
})

export default router
