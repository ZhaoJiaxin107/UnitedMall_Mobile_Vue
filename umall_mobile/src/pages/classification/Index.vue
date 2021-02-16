<template>
  <div>
    <u-header title="商品分类" />
    <!-- main -->
    <main>
      <!-- leftnav -->
      <u-left-nav />
      <!-- rightlist -->
      <u-right-list />
    </main>
  </div>
</template>

<script>
import UHeader from '@/components/Header'
import ULeftNav from './components/Leftnav'
import URightList from './components/Rightlist'
export default {
  components: {
    UHeader,
    ULeftNav,
    URightList
  }
}
</script>

<style>
/* 引入商品分类的样式 */
@import url("../../assets/css/classification.css");
</style>
