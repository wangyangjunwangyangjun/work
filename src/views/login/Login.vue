<template>
  <div>
    <Nav-bar>
      <i class="el-icon-back" slot="left" @click="handleBack()"></i>
      <div slot="center">手机号验证码登录</div>
      <div slot="right">密码登录</div>
    </Nav-bar>
    <Login-input></Login-input>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import LoginInput from '../../components/common/login/LoginInput'

  export default {
    name: "Login",
    components:{
      NavBar,
      LoginInput
    },
    methods:{
      handleBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>
