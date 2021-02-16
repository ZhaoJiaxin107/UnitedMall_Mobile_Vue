# UnitedMall_Mobile_Vue
An united mall mobile project using vue.js and vant 

### 如何运行项目

```
cd UMallAPI
npm start
```

```
cd umall_mobile
npm run dev
浏览器打开localhost:8080
```



### 主要功能

#### 1.首页

* 组件形式完成首页布局，其中底部导航为公共部分
* 从后台获取一级分类数据，vuex管理数据，并渲染至首页
* Swipe组件实现移动端轮播图
* 渲染限时秒杀数据
* Tab组件渲染商品列表
* 如果为登录状态点击立即抢购则添加购物车
* 如果未登录则提示未登录(Toast), 并跳转登录页面

#### 2.商品分类页

* 组件形式完成分类页布局, 头部、底部均为公共部分
* 从后台获取一级分类和一级分类对应的二级分类数据, vuex管理数据，并渲染至分类页面
* 点击商品一级分类，页面显示一级分类对应的二级分类
* 点击商品的二级分类，页面跳转至对应的商品列表页

#### 3.商品列表页

* 组件形式完成商品列表页，其中底部为公共部分
* 页面显示对应二级分类的商品列表
* 渲染商品数据
* 如果为登录状态点击立即抢购则添加购物车
* 如果未登录则提示未登录(Toast), 并跳转登录页面