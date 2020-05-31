<template>
  <div id="Inform">
    <van-nav-bar
      title="完善信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <br>
    <van-form @submit="onSubmit" style="padding: 20px">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password1"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        style="margin-top: 10px"
      />
      <van-field
        v-model="password2"
        type="password"
        name="密码"
        label="重输密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        style="margin-top: 10px"
      />
      <van-field name="radio" label="单选框" style="margin-top: 10px">
        <template #input>
          <van-radio-group v-model="radio1" direction="horizontal">
            <van-radio name="1">鸟蛋</van-radio>
            <van-radio name="2">六百万</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="stepper" label="徽章等级">
        <template #input>
          <van-stepper v-model="stepper1" />
        </template>
      </van-field>
      <van-field name="stepper" label="用户等级">
        <template #input>
          <van-stepper v-model="stepper2" />
        </template>
      </van-field>
      <van-field name="radio" label="单选框" style="margin-top: 10px">
        <template #input>
          <van-radio-group v-model="radio2" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="所在城市"
        placeholder="点击选择城市"
        @click="showPicker = true"
        style="margin-top: 10px"
      />
      <van-field name="uploader" label="头像" style="margin-top: 10px">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <van-popup v-model="showPicker" position="bottom" style="margin-top: 10px">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <div style="margin: 36px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import topNav from "../../content/topNav/topNav";
  import {getUserInfo, saveData} from "../../../network/basic/home";
  export default {
    name: "InfoForm",
    data() {
      return {
        username: '',
        password1: '',
        password2: '',
        uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
        value: '',
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        showPicker: false,
        radio1: 1,
        radio2: 1,
        stepper1: 1,
        stepper2: 1,
        paiZi:['鸟蛋','六百万'],
        sex:['男','女']
      };
    },
    components:{
      topNav
    },
    methods: {
      getUserInfo(tel){
        getUserInfo(tel).then(res => {
          this.$store.state.userName = res.user[0].userName;
          this.$store.state.paiZi = res.user[0].paiZi;
          this.$store.state.paiZiLevel = res.user[0].paiZiLevel;
          this.$store.state.userLevel = res.user[0].userLevel;
          console.log("赋值");
          console.log(this.$store.state.userName);
          console.log(this.$store.state.paiZi);
          console.log(this.$store.state.paiZiLevel);
          console.log(this.$store.state.userLevel);
        })
      },
      onSubmit(values) {
        var that = this;
        this.saveData(this.username,this.password1,this.paiZi[this.radio1-1],this.stepper1,this.stepper2,this.sex[this.radio2-1],this.value,this.$store.state.tel);
        setTimeout(function(){
          console.log("数据已经被更新");
          that.getUserInfo(that.$store.state.tel);
          console.log("赋值");
          console.log(that.$store.state.userName);
          console.log(that.$store.state.paiZi);
          console.log(that.$store.state.paiZiLevel);
          console.log(that.$store.state.userLevel);
          that.$router.go(-1);
        },2000);
      },
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
      onClickLeft() {
        this.$router.go(-1);
      },
      saveData(userName,password,paiZi,paiZiLevel,userLevel,sex,city,tel){
        saveData(userName,password,paiZi,paiZiLevel,userLevel,sex,city,tel).then(res => {
            console.log(res)
        })
      }
    },
  }
</script>

<style scoped>
@import "../../../assets/css/content/InfoForm.css";
</style>
