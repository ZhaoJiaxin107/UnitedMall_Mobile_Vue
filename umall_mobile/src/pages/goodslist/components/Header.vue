<template>
  <div class="uheader">
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
  </div>
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
