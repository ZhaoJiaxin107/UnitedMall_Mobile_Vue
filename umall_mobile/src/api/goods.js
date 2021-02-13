import http from './http'

// 获取首页商品数据
export const getIndexGoods = (page = 1, size = 3) => {
  return http.get('/getindexgoods')
}

// 获取商品总数量
export const getGoodsTotal = () => {
  return http.get('/goodscount')
}
