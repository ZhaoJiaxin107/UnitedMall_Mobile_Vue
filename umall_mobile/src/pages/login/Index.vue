<template>
  <div>
    <u-header title="会员登录" />
    <van-form @submit="onSubmit" style="margin: 16px">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
        autocomplete = "off"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        autocomplete = "off"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
        round block color = "#f26b11"
        type="info" native-type="submit"
        :loading = "loading"
        loading-text="登录中"
        :disabled = "disabled">
          登录
        </van-button>
      </div>
    </van-form>
    <div class = "toregister">
      没有账号，去
      <router-link to = "/register">注册</router-link>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/member'
import { Form, Field, Button, Toast } from 'vant'
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
      password: '',
      loading: false, // 登录按钮是否显示加载
      disabled: false // 登录按钮是否禁用
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
      // 加载中
      this.loading = true
      // 登录按钮禁用, 防止重复点击
      this.disabled = true
      // 数据的提交，即会员登录
      login(this.phone, this.password).then((res) => {
        // 登录成功
        Toast.success('登录成功')
        // 把接口返回的登录数据存储到本地存储中
        sessionStorage.setItem('user', JSON.stringify(res))
        // 跳转至首页
        this.$router.push('/')
      }).catch(err => {
        Toast.fail(err.message)
      }).finally(() => {
        // 不再显示加载中
        this.loading = false
        // 恢复按钮禁用状态
        this.disabled = false
      })
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
