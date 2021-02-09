import http from './http'

// 获取分类数据
export const getCategoryList = (istree = true) => {
  // istree是否需要返回树形结构, 是true, 否不传
  let params = {}
  if (istree) {
    params = {
      istree: 1
    }
  }
  return http.get('/catelist', {
    params
  })
}
