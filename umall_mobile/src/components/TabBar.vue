<template>
  <div class="tabnav" id = "tabbar">
    <router-link to ="/" exact-active-class="active">
      <i class="iconfont">&#xe600;</i>
      <em>首页</em>
    </router-link>
    <router-link to ="/cart" exact-active-class="active">
      <i class="iconfont">&#xe630;</i>
      <em>购物车</em>
    </router-link>
    <router-link to ="/mine" exact-active-class="active">
      <i class="iconfont">&#xe601;</i>
      <em>我的</em>
    </router-link>
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
.tabnav .active i,
.tabnav .active em {
  color: #ef6b16;
}

</style>
