// 导入接口文件
import { getPageGoods, getGoodsTotal } from '@/api/goods'

export default {
  namespaced: true,
  state: {
    allList: [], // 所有的规格
    list: [],
    page: 1, // 当前的页码
    size: 3, // 每页显示的条数
    total: 0 // 管理员用户总数
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = list
    },
    SET_TOTAL (state, total) {
      state.total = total
    },
    SET_PAGE (state, page) {
      state.page = page
    },
    SET_ALLLIST (state, list) {
      state.allList = list
    }
  },
  actions: {
    getGoodsList ({commit, state}) {
      getPageGoods(state.page, state.size).then(res => {
        console.log(res)
        commit('SET_LIST', res)
      })
    },
    getGoodsTotal ({commit}) {
      getGoodsTotal().then(res => {
        // console.log(res)
        commit('SET_TOTAL', res[0].total || 0)
      })
    },
    // 获取所有商品
    async getAllGoods ({commit}) {
      const total = await getGoodsTotal().then(res => res[0].total || 0)
      // console.log(total)
      if (total > 0) {
        const list = await getPageGoods(1, total)
        // console.log(list)
        commit('SET_ALLLIST', list)
      }
    }
  }
}
