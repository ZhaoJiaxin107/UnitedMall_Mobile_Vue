import http from './http'

// 获取所有规格数据
export const getSpecsList = () => {
  return http.get('/specslist')
}

// 获取规格总数量
export const getSpecsTotal = () => {
  return http.get('/specscount')
}
