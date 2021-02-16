<template>
  <div class="rightlist">
    <!-- wash hair -->
    <div class="category">
      <!-- list -->
      <ul class="list">
        <li v-for = "item of list" :key = "item.id">
          <a>
            <img v-if = "item.img !==''" :src="item.img | recombinationImg" alt="item" />
            <span>{{item.catename}}</span>
          </a>
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
