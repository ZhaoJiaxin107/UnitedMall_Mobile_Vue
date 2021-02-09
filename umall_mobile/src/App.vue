<template>
  <div>
    <router-view/>
    <!-- 公共的tabbar -->
    <tab-bar />
  </div>
</template>

<script>
import TabBar from './components/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>

</style>
