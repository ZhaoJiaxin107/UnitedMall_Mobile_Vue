<template>
  <div class="wrap">
      <ul class="cosmeticnav">
        <li><a href="#cosmeticlist">热门推荐</a></li>
        <li><a href="#cosmeticlist">发现好货</a></li>
        <li><a href="#cosmeticlist">只看专场</a></li>
        <li><a href="#cosmeticlist">只看商品</a></li>
      </ul>

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
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
