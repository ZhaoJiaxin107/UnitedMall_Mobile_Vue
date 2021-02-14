import http from './http'

// 获取限时秒杀列表
export const getSeckillList = () => {
  return http.get('/secklist')
}
