// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入reset.css
import './assets/css/reset.css'
// 引入全局过滤器
import './filters/goods'
// 引入全局mixin
import './mixin/cart'
// 创建通信总线
Vue.prototype.bus = new Vue()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
