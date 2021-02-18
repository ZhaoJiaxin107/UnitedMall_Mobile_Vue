<template>
  <div>
    <u-header title="会员登录" />
    <van-form @submit="onSubmit" style="margin: 16px">
      <van-field
        v-model="phone"
        name="Phone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="Password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block color = "#f26b11" type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class = "toregister">
      没有账号，去
      <a>注册</a>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button } from 'vant'
import UHeader from '@/components/Header'
export default {
  components: {
    UHeader,
    VanForm: Form,
    VanField: Field,
    VanButton: Button
  },
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  mounted () {
    // 获取tabbar
    let tabbar = document.querySelector('#tabbar')
    // 隐藏tabbar
    tabbar.style = 'display: none'
  },
  methods: {
    onSubmit () {
      console.log('on submit')
    }
  },
  beforeRouteLeave (to, from, next) {
    // 恢复tabbar
    let tabbar = document.querySelector('#tabbar')
    tabbar.style = 'display: flex'
    next()
  }
}
</script>

<style scoped>
.toregister{
  float: right;
  margin-right: .5rem;
}
.toregister a{
  text-decoration: underline;
}
</style>
