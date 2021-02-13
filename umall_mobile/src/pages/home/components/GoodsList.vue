<template>
  <ul>
    <li
      v-for="item of list"
      :key="item.id"
      class="cosmeticlist"
      id="cosmeticlist"
    >
      <a class="cosmetic" href="#">
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
          <p class="price"><b>￥</b>{{item.price}}</p>
          <p class="sell"><b>规格属性：</b>{{item.specsattr}}</p>
          <button>立即抢购</button>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array
  }
}

</script>

<style>
</style>
