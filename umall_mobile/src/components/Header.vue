<template>
  <!-- header -->
    <div class="wrap headerbg">
        <header>
            <a href="./list.html">
                <img src="/static/images/iconimg/arrleft_03.jpg" alt="arrleft">
            </a>
            <h3>{{title}}</h3>
            <i class="iconfont">&#xe626;</i>
        </header>
    </div>
</template>

<script>
export default {
  props: {
    title: String
  }

}
</script>

<style scoped>
.headerbg {
  background-color: #f26b11;
}
.wrap {
  max-width: 750px;
  margin: 0 auto;
  width: 100%;
}
.wrap header {
  max-width: 750px;
  width: calc(100% - 30px*2);
  height: 0.9rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap header a img {
  width: 0.17rem;
  height: 0.28rem;
}
.wrap header h3 {
  font: 0.35rem/1 "微软雅黑";
  color: #fefcff;
}
.wrap header i {
  font-size: 0.55rem;
  color: #fefcff;
}
</style>
