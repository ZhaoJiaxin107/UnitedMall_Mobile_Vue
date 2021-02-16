import { getCategoryList } from '@/api/category'
export default {
  // 启用命名空间(虚拟目录)
  namespaced: true,
  state: {
    list: [] // 菜单列表数据
  },
  getters: {
    firstCategoryList (state) {
      // 从list中筛选出一级菜单
      return state.list.filter(item => item.pid === 0).map(item => (
        {
          id: item.id,
          catename: item.catename
        }))
    }
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = list
    }
  },
  actions: {
    // 通过接口获取数据
    getCategoryList ({commit}) {
      getCategoryList().then(res => {
        // console.log(res)
        commit('SET_LIST', res)
      })
    }
  }
}
