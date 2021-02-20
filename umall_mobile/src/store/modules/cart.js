import { getCartList } from '@/api/cart'
export default {
  namespaced: true,
  state: {
    list: [] // 限时秒杀数据
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = list
    }
  },
  actions: {
    getCartList ({ commit }) {
      // 通过接口获取数据
      let userInfo = JSON.parse(sessionStorage.getItem('user'))
      let uid = userInfo.uid
      getCartList(uid).then(res => {
        // console.log(res)
        commit('SET_LIST', res)
      })
    }
  }
}
