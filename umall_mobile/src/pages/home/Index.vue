<template>
  <div>
    <div class="wrap">
      <!-- header -->
      <u-header />
      <!-- header-occupy -->
      <div class="header-occupy"></div>
      <!-- navigation -->
      <u-navigation />
    </div>
    <!-- banner -->
    <u-banner />
    <!-- section nav -->
    <u-section />
    <!-- padding part -->
    <div class="graypadding bt"></div>

    <!-- limtedtime -->
    <u-seckill />
    <!-- graypadding -->
    <div class="graypadding"></div>

    <!-- banner -->
    <div class="banner">
      <img src="/static/images/index/bar.jpg" alt="bar" />
    </div>

    <!-- graypadding -->
    <div class="graypadding bt bb"></div>

    <!-- hot recommend-->
    <u-recommend />

    <div class="add"></div>
    <!-- tabnav -->
  </div>
</template>

<script>
import UHeader from './components/Header'
import UNavigation from './components/Navigation'
import UBanner from './components/Banner'
import USection from './components/Section'
import USeckill from './components/Seckill'
import URecommend from './components/Recommend'
export default {
  components: {
    UHeader,
    UNavigation,
    UBanner,
    USection,
    USeckill,
    URecommend
  }
}
</script>

<style>
/* 引入首页的样式 */
@import url("../../assets/css/index.css");
</style>
