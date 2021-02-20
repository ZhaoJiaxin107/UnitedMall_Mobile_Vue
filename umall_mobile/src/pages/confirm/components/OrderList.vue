<template>
  <div>
    <div class="wrapconfirm" v-for="item of orderList" :key="item.id">
      <!-- product info and price -->
      <div class="productinfoandprice">
        <div class="productinfo">
          <img :src="item.img | recombinationImg" alt="item" />
          <div class="desc">
            <h3>{{ item.goodsname }}</h3>
            <h4>{{getSpecsName(item.specsid)}}-{{ item.specsattr }}</h4>
          </div>
        </div>
        <div class="price">
          <h3><b>￥</b>{{ item.market_price }}</h3>
        </div>
      </div>

      <!-- purchase number -->
      <div class="purchasenumber">
        <h3>购买数量:</h3>
        <div class="number">
          <i class="minus iconfont" @click = "reduceNumber(item.id)">&#xe607;</i>
          <input type="text" :value="item.num" />
          <i class="plus iconfont" @click = "addNumber(item.id)">&#xe620;</i>
        </div>
      </div>
    </div>
    <!-- delivery method -->
    <div class="wrapconfirm">
    <div class="deliverymethod">
      <h3>配送方式</h3>
      <h3>顺丰速运</h3>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    orderList: Array
  },
  computed: {
    ...mapState({
      specsList: state => state.specs.list
    })
  },
  mounted () {
    if (this.specsList.length === 0) {
      // 重新获取规格数据
      this.$store.dispatch('specs/getSpecsList')
    }
  },
  methods: {
    getSpecsName (specsId) {
      const specs = this.specsList.find(item => item.id === specsId)
      if (specs) {
        return specs.specsname
      } else {
        return ''
      }
    },
    reduceNumber (id) {
      this.$emit('reduce', id)
    },
    addNumber (id) {
      this.$emit('add', id)
    }
  }

}
</script>

<style>
</style>
