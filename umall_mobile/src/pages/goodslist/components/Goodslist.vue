<template>
  <div class="listpanel">
    <div class="listitem"
    v-for = "item of goodsList" :key="item.id">
      <!-- left image -->
      <div class="leftimg">
        <img :src="item.img | recombinationImg" alt="item" />
      </div>

      <!-- right description -->
      <div class="rightdesc">
        <div class="content">
          <a>{{item.goodsname | substrName(15)}}</a>
          <p class="price"><b>￥</b>{{item.market_price}}</p>
          <span class="comment">3625条评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: Array
  }
}
</script>

<style>
</style>
