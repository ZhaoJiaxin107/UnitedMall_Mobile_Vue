<template>
  <div class="avatarinfo">
    <div class="avatar">
      <img src="/static/images/mine/jiaxin.jpg" alt="avatar" />
      <!-- name -->
      <div class="nameandlevel">
        <p class="name">{{nickname}}</p>
        <p class="level">V3</p>
      </div>
    </div>
    <div class="sign">
      <button>每日签到</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: ''
    }
  },
  mounted () {
    let userInfo = JSON.parse(sessionStorage.getItem('user'))
    this.nickname = userInfo.nickname
  }
}
</script>

<style>
</style>
