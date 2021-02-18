<template>
  <van-checkbox-group v-model="checkedGroup" ref="checkboxGroup">
    <van-swipe-cell
    v-for="item of cartList"
    :key="item.id">
      <van-card
        :price="item.price"
        desc="描述信息"
        :title="item.goodsname"
        class="goods-card"
        :thumb="item.img | recombinationImg"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </van-checkbox-group>
</template>

<script>
import { checkboxGroup, SwipeCell, Card, Button } from 'vant'
export default {
  props: {
    cartList: Array
  },
  components: {
    VanCheckboxGroup: checkboxGroup,
    VanSwipeCell: SwipeCell,
    VanCard: Card,
    VanButton: Button
  },
  data () {
    return {
      checkedGroup: []
    }
  }
}
</script>

<style scoped>
.goods-card {
  margin: .1rem;
  background-color: #ffffff;
}

.delete-button {
    height: 100%;
}
.van-card__title{
  font-size: 0.25rem;
  color: #333333;
}
.van-card__desc{
  margin-top: .2rem;
  font-size: 0.22rem;
  color: #333333;
}
.van-card__price{
  color: #e5383c;
}
</style>
