<template>
  <!-- header -->
  <div>
    <div class="wrap3 headerbg">
        <header>
            <a>
                <img src="/static/images/iconimg/arrleft_03.jpg" @click = "goBack" alt="arrleft">
            </a>
            <h3>{{title}}</h3>
            <i class="iconfont">&#xe626;</i>
        </header>
    </div>
    <div class = "header-occupy"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }

}
</script>

<style scoped>
.headerbg {
  background-color: #f26b11;
}
.wrap3 {
  position: fixed;
  left: 0;
  top: 0;
  max-width: 750px;
  margin: 0 auto;
  width: 100%;
  z-index: 20;
}
.wrap3 header {
  max-width: 750px;
  width: calc(100% - 30px*2);
  height: 0.9rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap3 header a img {
  width: 0.17rem;
  height: 0.28rem;
}
.wrap3 header h3 {
  font: 0.35rem/1 "微软雅黑";
  color: #fefcff;
}
.wrap3 header i {
  font-size: 0.55rem;
  color: #fefcff;
}
.header-occupy {
  width: calc(100% - 30px*2);
  height: 0.9rem;
  margin: 0 auto;
}
</style>
