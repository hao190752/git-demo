<template>
  <el-carousel :interval="2000" type="card" height="130px">
    <el-carousel-item v-for="item in imglist">
       <router-link to="/about"><img :src="item" class="image"></router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
export default {
  data () {
    return {
        imglist:[
            require('../assets/img/1.png'),
            require( '../assets/img/2.jpg'),
            require('../assets/img/3.jpg'),
            require('../assets/img/4.jpg'),
            require('../assets/img/5.jpg'),
            require('../assets/img/6.jpg')
        ],
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>