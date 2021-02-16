<template>
  <div>
    <u-header title="商品分类" />
    <!-- main -->
    <main>
      <!-- leftnav -->
      <nav>
        <ul class="leftnav">
          <li><a href="#">施华蔻</a></li>
          <li><a href="#">沙宣</a></li>
          <li><a href="#">欧莱雅</a></li>
          <li><a href="#">潘婷</a></li>
          <li><a href="#">资生堂</a></li>
          <li><a href="#">阿道夫</a></li>
          <li><a href="#">卡诗</a></li>
          <li><a href="#">海飞丝</a></li>
          <li><a href="#">雅诗兰黛</a></li>
        </ul>
      </nav>

      <!-- rightlist -->
      <div class="rightlist">
        <!-- wash hair -->
        <div class="washhair">
          <!-- title -->
          <div class="title">
            <h3>洗发类</h3>
            <a class="more" href="javascript:;">更多&gt;</a>
          </div>
          <!-- list -->
          <ul class="list">
            <li>
              <a>
                <img src="/static/images/classify/1.jpg" alt="item" />
                <span>护亮泽洗发水</span>
              </a>
            </li>
            <li>
              <a>
                <img src="/static/images/classify/2.jpg" alt="item" />
                <span>滋养洗发水</span>
              </a>
            </li>
            <li>
              <a>
                <img src="/static/images/classify/3.jpg" alt="item" />
                <span>柔顺洗发露</span>
              </a>
            </li>
            <li>
              <a>
                <img src="/static/images/classify/4.jpg" alt="item" />
                <span>去屑洗发露</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/static/images/classify/5.jpg" alt="item" />
                <span>柔顺洗发露</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/static/images/classify/6.jpg" alt="item" />
                <span>焕彩洗发水</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- dry hair -->
        <div class="dryhair">
          <!-- title -->
          <div class="title">
            <h3>染发类</h3>
            <a class="more" href="#">更多&gt;</a>
          </div>

          <!-- list -->
          <ul class="list">
            <li>
              <a>
                <img src="/static/images/classify/7.jpg" alt="item" />
                <span>施华蔻染色</span>
              </a>
            </li>
            <li>
              <a>
                <img src="/static/images/classify/8.jpg" alt="item" />
                <span>施华蔻双氧水</span>
              </a>
            </li>
            <li>
              <a>
                <img src="/static/images/classify/9.jpg" alt="item" />
                <span>施华蔻染发膏</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UHeader from '@/components/Header'
export default {
  components: {
    UHeader
  }
}
</script>

<style>
/* 引入商品分类的样式 */
@import url("../../assets/css/classification.css");
</style>
