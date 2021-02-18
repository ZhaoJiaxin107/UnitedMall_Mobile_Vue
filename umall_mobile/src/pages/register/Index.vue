<template>
  <div>
    <u-header title="会员注册" />
    <van-form @submit="onSubmit" style="margin: 16px">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
        autocomplete = "off"
        :rules="phoneRules"
      />
      <van-field
        v-model="nickname"
        name="nickname"
        label="昵称"
        placeholder="请输入昵称"
        autocomplete = "off"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="Password"
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
        >
          注册
        </van-button>
      </div>
    </van-form>
    <div class = "toregister">
      没有账号，去
      <router-link to = "/login">注册</router-link>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button, Toast } from 'vant'
import { register } from '@/api/member'
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
      nickname: '',
      password: '',
      phoneRules: [
        { required: true, message: '请填写手机号' },
        { pattern: /^1[3-9]\d{9}$/, message: '请填写正确的手机号' }
      ],
      loading: false
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
      // 加载
      this.loading = true
      // 数据的提交，即会员注册
      register(this.phone, this.nickname, this.password).then(() => {
        // 注册成功
        Toast.success('注册成功')
        // 跳转至登录页面
        this.$router.push('/login')
      }).catch(err => {
        Toast.fail(err.message)
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
