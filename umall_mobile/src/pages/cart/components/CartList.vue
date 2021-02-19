<template>
  <van-checkbox-group v-model="checkedGroup" ref="checkboxGroup">
    <van-swipe-cell
    v-for="item of cartList"
    :key="item.id">
       <van-checkbox checked-color="#ee0a24" :name = "item.id" button-size="18" @click = "changeStatus"></van-checkbox>
      <van-card
        :price="item.market_price"
        :origin-price = "item.price"
        :title="item.goodsname"
        class="goods-card"
        :thumb="item.img | recombinationImg"
      />
      <van-stepper v-model.number="item.num" :name = "item.id" theme="round" integer />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="deleteItem(item.id)"/>
      </template>
    </van-swipe-cell>
  </van-checkbox-group>
</template>

<script>
import { CheckboxGroup, SwipeCell, Card, Button, Checkbox, Stepper } from 'vant'
export default {
  props: {
    cartList: Array
  },
  components: {
    VanCheckboxGroup: CheckboxGroup,
    VanSwipeCell: SwipeCell,
    VanCard: Card,
    VanButton: Button,
    VanCheckbox: Checkbox,
    VanStepper: Stepper
  },
  data () {
    return {
      checkedGroup: []
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('delete', id)
    },
    changeStatus () {
      console.log(this.checkedGroup)
    }
  }
}
</script>

<style scoped>
.van-swipe-cell{
  position: relative;
}
.goods-card {
  margin:0 0 .1rem .3rem;
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
.van-stepper{
  position: absolute;
  right: .2rem;
  bottom: .2rem;
}
</style>
