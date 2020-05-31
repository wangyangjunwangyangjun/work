<template>
  <div id="app">
    <div>
      <el-backtop :bottom="100"></el-backtop>
    </div>
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from './components/content/bottomTabbar/bottomNav'
  export default {
    name: 'app',
    components: {
      MainTabBar,
    },
    methods:{
      handleInfo(){
        this.$message({
          showClose: true,
          type:'success',
          center:true,
          message: '请调试手机界面大小调至458*860'
        });
        setTimeout(this.handleInfo2,5000);
      },
      handleInfo2(){
        this.$message({
          showClose: true,
          type:'success',
          center:true,
          message: '初次加载页面之后，即可离线访问'
        });
      }
    },
    mounted() {
      //调试的一些信息
      this.handleInfo();
    }
  }
</script>

<style>
  @import "assets/css/common/base.css";
  @import 'library/http_at.alicdn.com_t_font_1462780150_442243.css';
  /*针对muse-ui不显示问题*/
  /*@import 'http://fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';*/
  @import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
  @import "http://at.alicdn.com/t/font_1462780150_442243.css";
  @import 'library/iconfont/material-icons.css';
</style>
