<template>
  <!-- leftnav -->
  <nav>
    <ul class="leftnav">
      <li v-for = "item of classification" :key="item.id">
        <a href="javascript:;">
          {{item.catename}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    classification: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
