<template>
  <!-- <div class="banner">
      <img src="/static/images/index/banner.jpg" alt="banner" />
  </div> -->
  <van-swipe class="banner" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for = "item of list" :key="item.id">
      <img :src="item.img | recombinationImg" alt="banner">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import { mapState } from 'vuex'
export default {
  // 注册组件
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  },
  computed: {
    ...mapState({
      list: state => state.banner.list
    })
  },
  mounted () {
    if (this.list.length === 0) {
      this.$store.dispatch('banner/getBannerList')
    }
  }
}
</script>

<style>
</style>
