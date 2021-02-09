<template>
  <div>
    <div class="wrap">
      <!-- header -->
      <header>
        <a href="#">
          <img src="/static/images/index/logo.jpg" alt="logo" />
        </a>
        <form action="#" method="get">
          <input type="text" name="" placeholder="寻找商品" />
        </form>
        <i class="iconfont icon-gengduo-copy"></i>
      </header>

      <!-- navigation -->
      <nav>
        <ul class="list">
          <li><a href="#">推荐</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">鞋包</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">母婴儿童</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">男装</a></li>
          <li><a href="#">运动</a></li>
          <li><a href="#">品牌</a></li>
          <li><a href="#">奥莱</a></li>
          <i class="downarrow iconfont icon-jiantou8"></i>
        </ul>
      </nav>
    </div>
    <!-- banner -->
    <div class="banner">
      <img src="/static/images/index/banner.jpg" alt="banner" />
    </div>

    <!-- section nav -->
    <div class="wrap">
      <div class="sectionnav">
        <a href="#limit">
          <img src="/static/images/index/icon_1.jpg" alt="limitedshopping" />
          <em>限时抢购</em>
        </a>
        <a href="#">
          <img src="/static/images/index/icon_2.jpg" alt="creditmall" />
          <em>积分商城</em>
        </a>
        <a href="#">
          <img src="/static/images/index/icon_3.jpg" alt="contactus" />
          <em>联系我们</em>
        </a>
        <a href="#">
          <img src="/static/images/index/icon_4.jpg" alt="itemclassification" />
          <em>商品分类</em>
        </a>
      </div>
    </div>

    <!-- padding part -->
    <div class="graypadding bt"></div>

    <!-- limtedtime -->
    <div class="hotspot" id="limit">
      <div class="leftlimtedtime">
        <h2>
          <img src="/static/images/index/timer.jpg" alt="timer" class="timer" />
          <span>限时秒杀</span>
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
          <img
            src="/static/images/index/goods2.jpg"
            alt="goods"
            class="goods"
          />
        </div>
      </div>
      <div class="rightnewbrand">
        <div class="newbrand">
          <h2>
            <span>品牌上新</span>
            <em class="discount">折</em>
          </h2>
          <p class="flag">每日9点 抢大牌</p>
          <img src="/static/images/index/brand.jpg" alt="brand" class="brand" />
        </div>
        <div class="newbrandimg">
          <img src="/static/images/index/shop_1.jpg" alt="clothes" />
        </div>
        <div class="teneveryday">
          <h2>每日十件</h2>
          <p class="flag">只为你选好货</p>
          <img
            src="/static/images/index/shop_2.jpg"
            alt="clothes"
            class="coat"
          />
        </div>
        <div class="fight">
          <h2>拼啊</h2>
          <p class="flag">超级好价拼团</p>
          <img
            src="/static/images/index/shop_3.jpg"
            alt="clothes"
            class="roll"
          />
        </div>
      </div>
    </div>

    <!-- graypadding -->
    <div class="graypadding"></div>

    <!-- banner -->
    <div class="banner">
      <img src="/static/images/index/bar.jpg" alt="bar" />
    </div>

    <!-- graypadding -->
    <div class="graypadding bt bb"></div>

    <!-- cosmetic nav -->
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

    <div class="add"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* 引入首页的样式 */
@import url("../../assets/css/index.css");
</style>
