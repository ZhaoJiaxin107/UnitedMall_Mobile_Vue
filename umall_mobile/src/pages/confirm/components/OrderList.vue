<template>
  <div class="wrapconfirm">
        <!-- product info and price -->
        <div class="productinfoandprice">
            <div class="productinfo">
                <img src="/static/images/index/shop_4.jpg" alt="item">
                <div class="desc">
                    <h3>雅诗兰黛胶原霜</h3>
                    <h4>规格: 50g</h4>
                </div>
            </div>
            <div class="price">
                <h3><b>￥</b>123.00</h3>
            </div>
        </div>

        <!-- purchase number -->
        <div class="purchasenumber">
            <h3>购买数量: </h3>
             <div class="number">
                  <i class = "minus iconfont icon-jianhao"></i>
                  <input type="number" min = "1" step="1" value="1">
                  <i class = "plus iconfont icon-jiahao1"></i>
             </div>
        </div>

       <!-- delivery method -->
       <div class="deliverymethod">
           <h3>配送方式</h3>
           <h3>顺丰速运</h3>
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
