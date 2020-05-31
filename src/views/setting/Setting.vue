<template>
  <div id="setting">
    <van-nav-bar title="设置" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" color="white"/>
      </template>
    </van-nav-bar>
    <br>
    <van-cell title="首页推荐" is-link />
    <van-cell title="播放设置" is-link />
    <van-cell title="离线设置" is-link />
    <van-cell title="追番设置" is-link />
    <br>
    <van-cell title="推送设置" is-link />
    <van-cell title="清理存储空间" is-link />
    <van-cell title="其他设置" is-link />
    <br>
    <van-cell title="我的客服" is-link />
    <van-cell title="帮助" is-link />
    <van-cell title="用户协议" is-link />
    <van-cell title="隐私政策" is-link />
    <van-cell title="隐私政策设置" is-link />
    <br>
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="handleOut" block>退出登录</van-button>
  </div>
</template>

<script>
  export default {
    name: "Setting",
    methods:{
      handleOut(){
        this.$store.state.tel = undefined;
        this.$store.state.token = 'unLogin';
        this.$store.state.logo = require('../../assets/img/userlogo.jpg');
        this.$store.state.userName = undefined;
        this.$store.state.paiZi = undefined;
        this.$store.state.paiZiLevel = undefined;
        this.$store.state.userLevel = undefined;
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
@import "../../assets/css/content/setting.css";
</style>
