import { getIndexGoods } from '@/api/goods'
// 首页商品数据默认值
const defaultIndexList = {
  hot: [],
  new: [],
  all: []
}
export default {
  namespaced: true,
  state: {
    indexList: [...defaultIndexList] // 轮播图数据
  },
  mutations: {
    SET_INDEX_LIST (state, list) {
      state.indexList = list
    }
  },
  actions: {
    getIndexGoods ({ commit }) {
      // 通过接口获取数据
      getIndexGoods().then(res => {
        // console.log(res)
        const list = {
          hot: res[0].content || [],
          new: res[1].content || [],
          all: res[2].content || []
        }
        commit('SET_INDEX_LIST', list)
      })
    }
  }
}
