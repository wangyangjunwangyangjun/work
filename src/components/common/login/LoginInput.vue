<template>
  <div class="LoginInput">
    <img :src="showImg" alt="图片" id="loginPic">
    <div >
      <el-button type="info" icon="el-icon-location" class="InfoLocation">地区</el-button>
      <el-cascader
        :options="options"
        id="location"
        v-model="location"
        @click.native="handleInputLocation">
      </el-cascader>
    </div>
    <div >
      <el-button type="info" icon="el-icon-phone" class="InfoLocation">+86</el-button>
      <el-input
        clearable
        placeholder="请输入手机号码"
        class="tel"
        v-model="tel"
        type="number"
        @click.native="handleInputTel">
      </el-input>
      <el-button type="success" plain id="sendPassword" @click.native="handleSendCode()">发送验证码</el-button>
    </div>
    <div style="width: 100%">
      <el-input
        class="center"
        clearable
        placeholder="请输入验证码"
        show-password
        v-model="password"
        @click.native="handleInputPassword">
      </el-input>
    </div>
    <el-button plain id="login" @click="handleLogin">验证登录</el-button>
    <div style="width: 100%">
      <div class="center">
        未注册或未绑定bilibili的手机号，将帮你注册新账号
      </div>
      <div class="center">
        登录即代表你同意
        <el-button type="text">用户协议</el-button>
        和<el-button type="text">隐私政策</el-button>
        遇到问题？<el-button type="text">查看帮助</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {senPassword, RegisterBySendPassword} from '../../../serve/home'
  import Img1 from '../../../assets/img/login1.png'
  import Img2 from '../../../assets/img/login2.png'
  export default {
    name: "LoginInput",
    data() {
      return {
        showImg:Img2,
        tel:'',
        location:'',
        password:'',
        options: [{
          label:'中国大陆',
          value:'cn'
        },
        {
          label: '美国',
          value: 'America'
        }],
        id:'/',
      }
    },
    methods: {
      handleInputPassword(){
        this.showImg =  Img1;
        this.$message('请输入验证码');
      },
      handleInputTel(){
        this.showImg =  Img2;
        this.$message('请输入手机号码');
      },
      handleInputLocation(){
        this.showImg =  Img2;
        this.$message('请选择地区');
      },
      handleSendCode(){
        // fetch("http://localhost:3000/users/sendCode?phone=1836769").then(res=>res.text()).then(data=>{alert(data)});
        if(this.tel.length<11){
          this.$message.error('您输入的电话号码有误');
        }else{
          senPassword(this.tel).then(res=>{
            console.log(JSON.stringify(res));
          });
          this.$message({
            showClose: true,
            type:'success',
            center:true,
            message: '已发送验证码'
          });
        }
      },
      handleLogin(){
        try {
          this.validateInfo();
          RegisterBySendPassword(this.tel,this.password).then(res=>{
            if(res.status=='login'){
              this.$message({
                showClose: true,
                type:'success',
                center:true,
                message: '登陆成功'
              });
              this.$router.push(this.id);
              this.$store.state.token = 'login';
              this.$store.state.shift = this.id==='/friend'?'friend':'watching';
              this.$store.state.logo = require('../../../assets/img/logo.png');
              this.$store.state.tel = this.tel;
              var storage = window.sessionStorage;
              storage.setItem('tel', this.$store.state.tel);
            }else if(res.status=='error'){
              this.$message({
                showClose: true,
                type:'warning',
                center:true,
                message: '用户名或密码错误'
              });
            }
          });
        }catch (e) {
          this.$message.error(e.message);
        }
      },
      validateInfo(){
        if(this.tel.length!=11){
          throw new Error(this.tel.length+':'+'您输入的电话号码有误')
        }else if(this.password.length!=4){
          throw new Error("密码格式有误")
        }else if(!this.location){
          throw new Error("请选择地址!")
        }else{
          console.log(this.tel);
          console.log(this.password);
          this.$message("验证码失效,请重新发送!")
        }
      },
      getQueryId(){
        if(this.$route.query.id!=undefined){
          this.id = this.$route.query.id;
        }
      }
    },
    mounted() {
      this.getQueryId();
      var storage = window.sessionStorage;
      this.tel = storage.getItem("tel");
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/LoginInput.css";
</style>
