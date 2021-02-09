import axios from 'axios'

// 1.创建一个axios实例, 不污染全局的axios对象
const http = axios.create({
  baseURL: '/api', // 会产生所有的axios的url前添加/api
  timeout: 5000 // 超时的时间
})

// 2.响应拦截
http.interceptors.response.use(function (response) {
  response = response.data
  // console.log('http interceptors', response)
  if (response.code === 200) { // 接口请求成功(包括数据正常返回)
    return response.list || null
  }
  return Promise.reject(new Error(response.msg))
}, function (error) {
  return Promise.reject(error)
})
export default http
