<template>
<div>
  <van-checkbox-group v-model="checkedGroup" id = "checkboxGroup" ref ="checkboxGroup">
    <van-swipe-cell
    v-for="item of cartList"
    :key="item.id">
       <van-checkbox checked-color="#ee0a24" :name = "item.id" button-size="18"></van-checkbox>
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
  <!-- 结算 -->
  <div class="check">
    <van-row style="text-align: center">
      <van-col span="8" class = "selectAll">
        <!-- 全选CheckBox部分 -->
        <van-checkbox
          v-model="isAllChecked"
          @click="checkAll"
          checked-color="#ee0a24"
          button-size = "18"
          name = "checkAll"
          style="margin-top:-.4rem"
          >全选</van-checkbox
        >
      </van-col>
      <van-col span="8" class = "price">
        <!-- 总价格部分 -->
        总计：<strong>&nbsp;&nbsp;￥110.00</strong>
        <span>不含运费，已优惠￥13.00</span>
      </van-col>
      <van-col span="8">
        <!-- 结算按钮 -->
        <van-button square color="#f26b11">去结算({{length}}件)</van-button>
      </van-col>
    </van-row>
  </div>
</div>
</template>

<script>
import { Col, Row, CheckboxGroup, SwipeCell, Card, Button, Checkbox, Stepper } from 'vant'
export default {
  props: {
    cartList: Array,
    length: Number
  },
  components: {
    VanCol: Col,
    VanRow: Row,
    VanCheckboxGroup: CheckboxGroup,
    VanSwipeCell: SwipeCell,
    VanCard: Card,
    VanButton: Button,
    VanCheckbox: Checkbox,
    VanStepper: Stepper
  },
  computed: {
    isAllChecked: {
      get () {
        if (this.checkedGroup.length === this.length && this.length > 0) {
          return true
        } else {
          return false
        }
      },
      set (value) {
        // console.log(value)
      }
    }
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
    checkAll () {
      if (this.checkedGroup.length > 0) {
        // 有商品卡片选中
        if (this.checkedGroup.length === this.length) {
          // 令所有的选中反选, 即全不选
          this.$refs.checkboxGroup.toggleAll(false)
        } else {
          // 部分选中, 令所有的商品全部选中
          this.$refs.checkboxGroup.toggleAll(true)
        }
      } else {
        // 没有商品卡片选中，直接全选
        this.$refs.checkboxGroup.toggleAll(true)
      }
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
.check {
  background: #ffffff;
  width: 100%;
  height: 1.2rem;
  max-width: 750px;
  border-top: 1px solid #ebebeb;
  position: fixed;
  bottom: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
}
.check .selectall {
  font-size: 0.22rem;
  color: #676767;
  line-height: 0.35rem;
}
.check .price {
  font: 0.3rem/0.47rem "微软雅黑";
  color: #343434;
  letter-spacing: 0.01rem;
}
.check .price strong {
  color: #e5383c;
}
.check .price span {
  font-size: 0.2rem;
  color: #a4a4a4;
}
.van-button {
  font-size: 0.3rem;
  cursor: pointer;
}
</style>
