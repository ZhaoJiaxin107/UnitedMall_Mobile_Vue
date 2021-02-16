<template>
<div>
   <!-- header -->
    <div class="wrapper headerbg">
        <u-header title = "我的订单"/>
        <!-- avatar -->
        <u-avatar />
    </div>

    <div class="wrapper">
        <!-- section nav -->
        <u-section-nav />
        <div class="padding"></div>
    </div>

    <!-- main -->
    <main>
      <u-person-manage />
    </main>
</div>
</template>

<script>
import UHeader from '@/components/Header'
import UAvatar from './components/Avatar'
import USectionNav from './components/Sectionnav'
import UPersonManage from './components/Personalmanage'
export default {
  components: {
    UHeader,
    UAvatar,
    USectionNav,
    UPersonManage
  }
}
</script>

<style>
/* 引入我的订单样式 */
@import url("../../assets/css/myorder.css");
</style>
