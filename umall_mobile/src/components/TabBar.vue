<template>
  <div class="tabnav">
    <a href="#" class="first">
      <i class="iconfont">&#xe600;</i>
      <em>首页</em>
    </a>
    <a href="#">
      <i class="iconfont">&#xe630;</i>
      <em>购物车</em>
    </a>
    <a href="#">
      <i class="iconfont">&#xe601;</i>
      <em>我的</em>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style>
.tabnav {
  background-color: #ffffff;
  width: 100%;
  max-width: 750px;
  height: 1.2rem;
  border-top: 1px solid #ebebeb;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.tabnav a {
  text-align: center;
}
.tabnav a i {
  display: block;
  font-size: 0.5rem;
  color: #8a8a8a;
}
.tabnav a em {
  font: 0.2rem/0.32rem "微软雅黑";
  color: #878787;
}
.tabnav a:nth-of-type(1) i,
.tabnav a:nth-of-type(1) em {
  color: #ef6b16;
}

</style>
