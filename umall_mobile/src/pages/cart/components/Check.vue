<template>
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
        <van-button square color="#f26b11">去结算(4件)</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row, Checkbox, Button } from 'vant'
export default {
  components: {
    VanCol: Col,
    VanRow: Row,
    VanCheckbox: Checkbox,
    VanButton: Button
  },
  methods: {
    checkAll () {

    }
  },
  data () {
    return {
      isAllChecked: false
    }
  }
}
</script>

<style scoped>
.check {
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
.van-checkbox {
  margin: .25rem 0 0 .25rem;
}
.van-button {
  font-size: 0.3rem;
  cursor: pointer;
}
</style>
