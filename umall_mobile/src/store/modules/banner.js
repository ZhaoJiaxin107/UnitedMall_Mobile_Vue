import { getBannerList } from '@/api/banner'
export default {
  namespaced: true,
  state: {
    list: [] // 轮播图数据
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = list
    }
  },
  actions: {
    getBannerList ({ commit }) {
      // 通过接口获取数据
      getBannerList().then(res => {
        // console.log(res)
        commit('SET_LIST', res)
      })
    }
  }
}
