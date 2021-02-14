<template>
  <div class="hotspot" id="limit">
    <div class="leftlimtedtime">
      <h2>
        <img src="/static/images/index/timer.jpg" alt="timer" class="timer" />
        <span v-if = "this.list.length > 0">{{list[0].title}}</span>
      </h2>
      <p class="flag">每天零点场 好货秒不停</p>
      <div class="countdown">
        <img
          src="/static/images/index/countdown.jpg"
          alt="countdown"
          class="count"
        />
        <span class="spike">秒杀</span>
      </div>
      <div class="towel">
        <img src="/static/images/index/goods2.jpg" alt="goods" class="goods" />
      </div>
    </div>
    <div class="rightnewbrand">
      <div class="newbrand">
        <h2>
          <span v-if = "this.list.length > 0">{{list[1].title}}</span>
          <em class="discount">折</em>
        </h2>
        <p class="flag">每日9点 抢大牌</p>
        <img src="/static/images/index/brand.jpg" alt="brand" class="brand" />
      </div>
      <div class="newbrandimg">
        <img src="/static/images/index/shop_1.jpg" alt="clothes" />
      </div>
      <div class="teneveryday">
        <h2 v-if = "this.list.length > 0">{{list[2].title}}</h2>
        <p class="flag">只为你选好货</p>
        <img src="/static/images/index/shop_2.jpg" alt="clothes" class="coat" />
      </div>
      <div class="fight">
        <h2 v-if = "this.list.length > 0">{{list[3].title}}</h2>
        <p class="flag">超级好价拼团</p>
        <img src="/static/images/index/shop_3.jpg" alt="clothes" class="roll" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      list: state => state.seckill.list
    })
  },
  mounted () {
    if (this.list.length === 0) {
      // 重新获取秒杀数据
      this.$store.dispatch('seckill/getSeckillList')
    }
  }
}
</script>

<style>
</style>
