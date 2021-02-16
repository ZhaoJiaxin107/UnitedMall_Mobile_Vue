<template>
  <div class="rightlist">
    <!-- wash hair -->
    <div class="category">
      <!-- list -->
      <ul class="list">
        <li v-for = "item of list" :key = "item.id">
          <router-link :to = "'/goodslist/' + item.id">
            <img v-if = "item.img !==''" :src="item.img | recombinationImg" alt="item" />
            <span>{{item.catename}}</span>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style scoped>
</style>
