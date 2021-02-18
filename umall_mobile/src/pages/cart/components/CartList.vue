<template>
  <van-checkbox-group v-model="checkedGroup" ref="checkboxGroup">
    <van-swipe-cell
    v-for="item of cartList"
    :key="item.id">
      <van-checkbox checked-color="#ee0a24"></van-checkbox>
      <van-card
        :price="item.market_price"
        :origin-price = "item.price"
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
import { CheckboxGroup, SwipeCell, Card, Button, Checkbox } from 'vant'
export default {
  props: {
    cartList: Array
  },
  components: {
    VanCheckboxGroup: CheckboxGroup,
    VanSwipeCell: SwipeCell,
    VanCard: Card,
    VanButton: Button,
    VanCheckbox: Checkbox
  },
  data () {
    return {
      checkedGroup: [],
      checked: true
    }
  }
}
</script>

<style scoped>
.van-swipe-cell{
  position: relative;
}
.goods-card {
  margin: .1rem .3rem;
  background-color: #ffffff;
}

.delete-button {
  height: 100%;
}
.van-card__content{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.van-card__title{
  font-size: 0.28rem;
  color: #333333;
}
.van-card__price{
  color: #e5383c;
}
.van-card__origin-price{
   font-size: 0.23rem;
}
.van-checkbox{
  position: absolute;
  left: .1rem;
  top: 50%;
  margin-top: translateY(-50%);
  z-index: 2;
}
</style>
