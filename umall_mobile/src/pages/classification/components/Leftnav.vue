<template>
  <!-- leftnav -->
  <nav>
    <ul class="leftnav">
      <!--
          fid代表当前选中的一级分类的id
          item.id代表分类循环时的，每一个分类的id
          fid === item.id
          如果为真代表当前循环的分类就是要选中的分类
      -->
      <li :class="{active: fid === item.id}"
      v-for = "item of classification"
      :key="item.id" @click="changeFid(item.id)">
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
    },
    fid: Number
  },
  methods: {
    changeFid (id) {
      this.$emit('changeFid', id)
    }
  }
}
</script>

<style scoped>
.active{
  border-left: 0.08rem solid #f26b11;
}
.active a{
  color: #f26b11;
}
</style>
