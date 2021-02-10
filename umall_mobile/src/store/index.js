import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 导入模块
import category from './modules/category'
import banner from './modules/banner'

// 使用vuex插件
Vue.use(Vuex)

const store = new Vuex.Store({
  // 使用模块
  modules: {
    // 模块
    category,
    banner
  }
})

export default store
