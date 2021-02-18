import http from './http'

// 会员注册
export const register = (phone, nickname, password) => {
  // 判断参数的合法性
  if (!phone || !nickname || !password) {
    return Promise.reject(new Error('参数不完整'))
  }
  return http.post('/register', {
    phone,
    nickname,
    password
  })
}
