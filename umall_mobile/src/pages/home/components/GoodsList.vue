<template>
  <ul>
    <li
      v-for="item of list"
      :key="item.id"
      class="cosmeticlist"
      id="cosmeticlist"
    >
      <a class="cosmetic">
        <!-- left -->
        <div class="cosmeticimg">
          <img
            :src="item.img | recombinationImg"
            alt="cosmetic"
            class="first"
          />
        </div>
        <!-- right -->
        <div class="cosmeticdesc">
          <h3>{{item.goodsname}}</h3>
          <p class="price"><b>￥</b>{{item.market_price}}</p>
          <p class="sell"><b>规格属性：</b>{{getSpecsName(item.specsid)}} - {{item.specsattr}}</p>
          <button>立即抢购</button>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    list: Array
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
