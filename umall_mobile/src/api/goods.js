import http from './http'

// 分页获取商品数据
export const getPageGoods = (page = 1, size = 3) => {
  return http.get('/goodslist', {
    params: {
      page,
      size
    }
  })
}

// 获取商品总数量
export const getGoodsTotal = () => {
  return http.get('/goodscount')
}
