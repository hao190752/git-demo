<template>
    <div>
       <el-row>
          <el-col :span="24"  >
            <el-card :body-style="{ padding: '0px' }">
              <img :src="con.img" class="image">
              <div style="padding: 14px;">
                <span>{{con.name}}</span> 
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
      con:
        {code:'xdl002',name:'欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临',img:require('../assets/img/7.jpg')}
    }
  }
}
</script>