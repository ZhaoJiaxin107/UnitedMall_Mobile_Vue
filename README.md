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

#### 1.注册

* 使用Vant中的Form组件
* 调用后台api完成注册
* 注册按钮加载中时为禁用状态

#### 2.登录

* 使用Vant中的Form组件
* 调用后台api完成登录
* 登录成功用户信息存储到sessionStorage中
* 登录按钮加载中时为禁用状态

#### 3.首页

* 组件形式完成首页布局，其中底部导航为公共部分
* 从后台获取一级分类数据，vuex管理数据，并渲染至首页
* Swipe组件实现移动端轮播图
* 渲染限时秒杀数据
* Tab组件渲染商品列表
* 如果为登录状态点击立即抢购则添加购物车
* 如果未登录则提示未登录(Toast), 并跳转登录页面

#### 4.商品分类页

* 组件形式完成分类页布局, 头部、底部均为公共部分
* 从后台获取一级分类和一级分类对应的二级分类数据, vuex管理数据，并渲染至分类页面
* 点击商品一级分类，页面显示一级分类对应的二级分类
* 点击商品的二级分类，页面跳转至对应的商品列表页

#### 5.商品列表页

* 组件形式完成商品列表页，其中底部为公共部分
* 页面显示对应二级分类的商品列表
* 渲染商品数据
* VanList组件添加商品列表触底加载
* 搜索框中输入关键字，匹配对应商品信息
* 如果为登录状态点击立即抢购则添加购物车
* 如果未登录则提示未登录(Toast), 并跳转登录页面

#### 6.购物车页面

* Vant组件Checkbox, SwipeCell, Stepper渲染购物车列表
* Vant组件Col, Row, Checkbox渲染结算,
* 点击全选按钮，所有商品都选中，反选全选按钮，所有商品都不选中
* 如果所有商品都选中，则全选按钮为选中，反之为不选中
* 结算计算选中商品的计算总额和优惠价格

#### 7.确认订单页



#### 8.个人中心页

