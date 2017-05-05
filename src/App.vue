<template>
  <div id="app">

  <el-row>
    <img src="./assets/logo.jpg" height="50px;" class="image">
    <el-col :span="8"><div class="grid-content bg-purple"> <router-link to="/goods">商品</router-link></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light"> <router-link to="/about">评论</router-link></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"> <router-link to="/store">商家</router-link></div></el-col>
    
  </el-row>
   
   
   
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
a{
  text-decoration: none;
   color:#2c3e50 ;
   line-height: 36px;
}
.el-row {
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 1px;
  }
  .bg-purple-dark {
    background: #58B7FF;
  }
  .bg-purple {
    background: #58B7FF;
  }
  .bg-purple-light {
    background: #58B7FF;
  }
  .grid-content {
    border-radius: 1px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #58B7FF;
  }
</style>



