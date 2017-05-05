<template>
<div>
<imglist></imglist>
    <el-row>
    
      <el-col :span="24" v-for="item in goods" >
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/about"><img :src="item.img" class="image"></router-link>

          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix" >
             <span>￥{{item.price}}</span>
            
             <el-button type="success" @click="buy(item)">购买</el-button>
             
            </div>
          </div>
        </el-card>
      </el-col>

      <!-- 购物车 -->
         <el-button id="btn" type="info"  @click="showCart=!showCart">{{showCart?'隐藏':'显示'}}</el-button>
        <ul v-show="showCart">
            <li v-for="item in cart">
               {{item.name}}--- 
               <el-button type="info" @click="jian(item)">-</el-button>
               <strong>{{item.num}}</strong>
               <el-button type="info" @click="jia(item)">+</el-button>
               --小计：￥{{item.num*item.price}}
            </li>
        </ul>
        <h3>总计：￥{{all.total }} 商品种类：{{all.types}} 商品件数：{{all.count}}</h3>
    </el-row>


</div>
</template>

<style>
  ul li{
    list-style: none;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  #btn{
    margin-top: 10px;
  }
</style>

<script>
import imglist from '@/components/lunbo.vue'

export default {

  data() {
    return {
      goods:[
        {code:'xdl001',name:'好吃的汉堡',img:require('../assets/img/1.png'),price:12},
        {code:'xdl002',name:'美味的卤肉饭',img:require('../assets/img/2.jpg'),price:15},
        {code:'xdl003',name:'甜蜜的草莓冰',img:require('../assets/img/3.jpg'),price:10},
        {code:'xdl004',name:'好喝的鸡尾酒',img:require('../assets/img/4.jpg'),price:20.5},
        {code:'xdl005',name:'美味的回锅肉',img:require('../assets/img/5.jpg'),price:25.5},
        {code:'xdl006',name:'金黄的蛋挞',img:require('../assets/img/6.jpg'),price:1.5}
      ]  ,
      
      cart:{},
      all :{total:0,types:0,count:0},
      showCart:false
    }
  },

      

  
    components:{
         imglist
      },
     
    methods:{
  
     buy:function(item){    
           var code = item.code;
                //有商品  当前商品+1
                if(this.cart[code]){
                    this.cart[code]['num']++;
                    console.log(this.cart);
                }else{
                    //没有商品  则添加到购物车
                    this.cart[code] = {
                        code:item.code,
                        name:item.name,
                        num:1,
                        price:item.price
                    }
                }

                var a = this.cart
                this.cart = {};
                this.cart = a;
          
               
             
     },
     //数量加减
      jian :function(n){
          if(n.num>0){
            n.num--;  
          }
          var a = this.cart
          this.cart = {};
          this.cart = a;
      },
      jia : function(n){
          n.num++;
          var a = this.cart
          this.cart = {};
          this.cart = a;
      },
      rm:function(n){
        // this.items.splice(index,1);
        this.cart[code].$remove(n);
     }

  },
   //监听购物车的改变
      watch:{
           cart:{
             handler:function(){
              console.log(22222222222)
              var total = 0,types=0,count=0;
              for(var i in this.cart){
                  types++;
                  count += this.cart[i].num;
                  total += this.cart[i].price*this.cart[i].num;
              }
              this.all.types=types;
              this.all.count=count;
              this.all.total=total;
 
            },
            deep:true
          }
        }, 

  }


</script>