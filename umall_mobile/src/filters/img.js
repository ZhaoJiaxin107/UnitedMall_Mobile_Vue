// 处理图片的过滤器
import Vue from 'vue'

Vue.filter('recombinationImg', (imgSrc) => {
  // 如果imgSrc已经是远程路径就不处理  http:// https://
  if (!/^(https?:\/\/).*/.test(imgSrc)) {
    // imgSrc不是http://或者https://开头
    return 'http://localhost:3000' + imgSrc
  }
  return imgSrc
})

// 字符串截取
Vue.filter('substrName', (value, length, suffix = '...') => {
  value = value.toString() // 转化为字符串
  if (isNaN(length) || length <= 0) {
    length = value.length
  }
  if (value.length <= length) {
    // 字符串的长度比截取的长度小
    return value
  }
  return value.substr(0, length) + suffix
})
