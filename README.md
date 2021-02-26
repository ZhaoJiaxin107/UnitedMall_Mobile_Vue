# UnitedMall_Mobile_Vue
An united mall mobile project using vue.js and vant 

### 如何运行项目

```
git clone https://github.com/ZhaoJiaxin107/UnitedMall_Mobile_Vue.git
```

启动后台接口

```
cd UMallAPI
npm start
```

启动前台项目

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
* Vant组件Col, Row, Checkbox渲染结算
* 商品数量的增加和减少
* 删除购物车中不想要的物品
* 点击全选按钮，所有商品都选中，反选全选按钮，所有商品都不选中
* 如果所有商品都选中，则全选按钮为选中，反之为不选中
* 结算计算选中商品的计算总额和优惠价格

#### 7.确认订单页

* 组件形式完成订单页布局
* 渲染订单列表
* 渲染总金额、运费、优惠券、会员优惠和积分
* 计算实付金额

#### 8.个人中心页

* 显示个人信息



### How to run a project

```
git clone https://github.com/ZhaoJiaxin107/UnitedMall_Mobile_Vue.git
```

start background api

```
cd UMallAPI
npm start
```

start frontend project

```
cd umall_ mobile
npm run dev
Browser open localhost:8080
```

### major function

#### 1.Registration

* Using the form component in vant

* Call the background API to complete the registration

* The registration button is disabled while loading

#### 2.Login

* Using the form component in vant

* Call the background API to complete the login

* The user information of successful login is stored in sessionstorage

* The login button is disabled when loading

#### 3.Home page

* Component form to complete the layout of the home page, in which the bottom navigation is the public part

* Get the first level classification data from the backend management system, manage the data with vuex, and render it to the home page

* Implementation of mobile carousel graph with swipe component

* Rendering time limited seckill data

* Tab component rendering commodity list

* If you are in login status, click buy now to add a shopping cart

* If you are not logged in, you will be prompted not to log in (toast) and jump to the login page

#### 4.Commodity classification page

* Component form to complete the layout of the classification page, the head and bottom are public parts

* Get the first level classification and the second level classification data corresponding to the first level classification from the backend management system, manage the data with vuex, and render it to the classification page

* Click the first level classification to display the second level classification corresponding to the first level classification

* Click the secondary classification of goods, and the page will jump to the corresponding goods list page

#### 5.Product list page

* Component form to complete the commodity list page, the bottom of which is the public part

* The page displays the commodity list of the corresponding secondary classification

* Render commodity data

* Vanlist component add commodity list bottom loading

* Enter keywords in the search box to match the corresponding product information

* If you are in login status, click buy now to add a shopping cart

* If you are not logged in, you will be prompted not to log in (toast) and jump to the login page

#### 6.Shopping cart page

* Vant components checkbox, swipecell and stepper render shopping cart list

* Vant components col, row and checkbox

* Delete unwanted items from shopping cart

* Click the select all button to select all products. If you select the select all button inversely, all products will not be selected

* If all products are selected, the select all button is selected; otherwise, it is not selected

* Calculate the total amount and preferential price of the selected goods by settlement calculation

#### 7.Confirm order page

* Complete the order page layout in component form

* Render order list

* Render total amount, freight, coupons, member benefits and points

* Calculate the amount actually paid

#### 8.Personal center page

* Display personal information