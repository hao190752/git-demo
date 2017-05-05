<template>
    <div>
        <el-row>
		  <el-col :span="24"  >
		    <el-card :body-style="{ padding: '0px' }">
		      <img :src="goods.img" class="image">

		      <div style="padding: 14px;">
		        <span>{{goods.name}}</span>
		        <div class="bottom clearfix">
		         <span>￥{{goods.price}}</span>
		        
		         <el-button type="success" @click="buy(item)">购买</el-button>
		         
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>
    </div>
</template>




<script>
export default {
  data:function () {
    return {
      goods:
        {code:'xdl002',name:'美味的卤肉饭美味的卤肉饭美味的卤肉饭美味的卤肉饭美味的卤肉饭美味的卤肉饭美味的卤肉饭美味的卤肉饭美味的卤肉饭',img:require('../assets/img/2.jpg'),price:15}  
    }
  }
}
</script>