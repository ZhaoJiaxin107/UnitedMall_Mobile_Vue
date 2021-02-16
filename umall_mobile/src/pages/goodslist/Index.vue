<template>
   <!-- header -->
    <div class="wrap">
        <!-- top -->
        <u-header />
        <!-- search -->
        <u-search />
        <!-- listpanel -->
        <u-goods-list />
        <div class="add"></div>
    </div>
</template>

<script>
import UHeader from './components/Header'
import USearch from './components/Search'
import UGoodsList from './components/Goodslist'
export default {
  components: {
    UHeader,
    USearch,
    UGoodsList
  }

}
</script>

<style>
/* 引入商品列表的样式 */
@import url("../../assets/css/list.css");
</style>
