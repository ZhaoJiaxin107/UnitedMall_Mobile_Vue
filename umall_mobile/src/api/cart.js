import http from './http'

// 添加购物车
export const addCart = (uid, goodsid, num) => {
  if (!uid || !goodsid || !num) {
    return Promise.reject(new Error('参数不完整'))
  }
  return http.post('/cartadd', {
    uid,
    goodsid,
    num
  })
}
