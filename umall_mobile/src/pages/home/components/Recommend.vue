<template>
  <div class="wrap">
    <van-tabs type="card" color="#f26b11"
    class="tabs">
      <van-tab title="热门推荐">
        <div class="cosmeticlist" id="cosmeticlist">
          <a class="cosmetic" href="#">
            <!-- left -->
            <div class="cosmeticimg">
              <img
                src="/static/images/index/shop_4.jpg"
                alt="cosmetic"
                class="first"
              />
            </div>
            <!-- right -->
            <div class="cosmeticdesc">
              <h3>雅诗兰黛胶原霜 修护抗皱</h3>
              <p class="price"><b>￥</b>123.00</p>
              <p class="sell">已售800件</p>
              <button>立即抢购</button>
            </div>
          </a>

          <a class="cosmetic" href="#">
            <!-- left -->
            <div class="cosmeticimg">
              <img
                src="/static/images/index/shop_6.jpg"
                alt="cosmetic"
                class="second"
              />
            </div>
            <!-- right -->
            <div class="cosmeticdesc">
              <h3>雅丽 滋润面膜乳霜 护肤</h3>
              <p class="price"><b>￥</b>332.00</p>
              <p class="sell">已售900件</p>
              <button>立即抢购</button>
            </div>
          </a>
          <a class="cosmetic" href="#">
            <!-- left -->
            <div class="cosmeticimg">
              <img
                src="/static/images/index/shopCart.jpg"
                alt="cosmetic"
                class="first"
              />
            </div>
            <!-- right -->
            <div class="cosmeticdesc">
              <h3>透蜜水漾 美肤素颜霜</h3>
              <p class="price"><b>￥</b>88.90</p>
              <p class="sell">已售1000件</p>
              <button>立即抢购</button>
            </div>
          </a>
        </div>
      </van-tab>
      <van-tab title="发现好货"></van-tab>
      <van-tab title="只看专场"></van-tab>
      <van-tab title="只看商品"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
export default {
  components: {
    VanTab: Tab,
    VanTabs: Tabs
  }
}
</script>

<style>
.van-tabs__wrap {
  margin: .2rem 0;
  width: 100%;
}
</style>
