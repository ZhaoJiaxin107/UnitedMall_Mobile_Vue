import { getSpecsList } from '@/api/specs'
export default {
  namespaced: true,
  state: {
    list: [] // 规格数据
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = list
    }
  },
  actions: {
    getSpecsList ({ commit }) {
      // 通过接口获取数据
      getSpecsList().then(res => {
        console.log(res)
        commit('SET_LIST', res)
      })
    }
  }
}
