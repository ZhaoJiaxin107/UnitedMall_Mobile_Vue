<template>
  <header>
    <a>
      <img
        src="/static/images/iconimg/arrowLeft.jpg"
        alt="leftarrow"
        class="leftarrow"
        @click = "goBack"
      />
    </a>
    <a href="#">
      <img src="/static/images/index/logo.jpg" alt="logo" class="logo" />
    </a>
    <i class="iconfont">&#xe626;</i>
  </header>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.back()
      this.$emit('clearlist')
    }
  }
}
</script>

<style>
</style>
