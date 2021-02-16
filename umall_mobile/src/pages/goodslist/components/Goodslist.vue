<template>
  <div class="listpanel">
    <div class="listitem"
    v-for = "item of goodsList" :key="item.id">
      <!-- left image -->
      <div class="leftimg">
        <img :src="item.img | recombinationImg" alt="item" />
      </div>

      <!-- right description -->
      <div class="rightdesc">
        <div class="content">
          <a>{{item.goodsname | substrName(15)}}</a>
          <p class="price"><b>￥</b>{{item.market_price}}</p>
          <span class="comment">{{getSpecsName(item.specsid)}} - {{item.specsattr}}</span>
          <button @click = "addCart(item.id, 1)">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    goodsList: Array
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
    }
  }
}
</script>

<style>
</style>
