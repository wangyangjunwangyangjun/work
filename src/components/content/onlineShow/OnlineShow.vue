<template>
  <div>
    <div class="float-bar">
      <router-link to="/watching">
        <i aria-hidden="true" class="fa-arrow-left el-icon-back" @click="getOut"></i>
      </router-link>
    </div>
    <video src="../../../assets/video/video.mp4" class="video" controls="controls"></video>

    <div class="Tab">
      <div class="vantTab">
        <van-tabs>
          <van-tab v-for="item in showList" :title="item"></van-tab>
        </van-tabs>
      </div>
      <div class="subscription">
        <mu-avatar size="31" class="logo">
          <img src="../onlineShow/images/avatar.jpg">
        </mu-avatar>
        <div class="note">
          <div>+关注</div>
          <div>4.7万</div>
        </div>
      </div>
    </div>
    <van-notice-bar text="喜欢主播就给上舰吧~主播更爱你呦~喜欢主播就给上舰吧~主播更爱你呦~喜欢主播就给上舰吧~主播更爱你呦~" left-icon="volume-o" />
    <div class="chatContent">
<!--      聊天框-->
      <div id="chartContent">
        <div v-for="item in commentsList">
          <span id="paiZi">{{item.paiZi}}</span>
          <span id="paiZiLevel">{{item.paiZiLevel}}</span>
          <span id="userLevel">{{item.userLevel}}</span>
          <span id="name">{{item.name}}</span>
          <span id="say">{{item.say}}</span>
        </div>
      </div>
    </div>
    <div class="BottomInput">
      <mu-avatar size="31" class="logo">
        <img src="../onlineShow/images/avatar.jpg">
      </mu-avatar>
      <div id="InputContent">
        <input placeholder="发个弹幕呗~" type="text"></input>
      </div>
      <mu-avatar size="31" class="logo" id="send" @click="sendMessage()">
        <img src="../../../assets/img/send.png">
      </mu-avatar>
      <mu-avatar size="31" class="logo">
        <img src="../../../assets/img/iconChart.png">
      </mu-avatar>
      <mu-avatar size="31" class="logo">
        <img src="../../../assets/img/iconGift.png">
      </mu-avatar>
    </div>
  </div>
</template>

<script>
  import {getUserInfo} from "../../../network/basic/home";
  export default {
    name: "OnlineShow",
    data(){
      return {
        socket:undefined,
        userData:{},
        showList:[
          '互动','主播','贡献榜','大航海(72)','更多直播','友爱社'
        ],
        commentsList:[],
        users:['user1','user2','user3']
      }
    },
    methods: {
      onClickIcon() {
      },
      onClickButton() {
      },
      serveChart_webSocket(){
        var input = document.querySelector('input');
        var sendMessage = document.querySelector('#send');
        var div = document.querySelector('#chartContent');
        var socket = new WebSocket('ws://localhost:4000');
        // open:当websocket服务连接成功时候触发
        socket.addEventListener('open',function () {
          div.innerHTML = '连接服务成功了'
        });
        // 主动的给websocket服务发送消息
        sendMessage.addEventListener('click',function () {
          if(input.value !== ''){
            socket.send(input.value);
          }else{
            console.log('不能发送空消息')
          }
          input.value = ''
        });
        socket.addEventListener('message',function (e) {
          console.log(e.data);
          var dv = document.createElement('div');
          dv.innerText = e.data;
          dv.className = 'newDivClass';
          div.appendChild(dv);
        });
        socket.addEventListener('close',function () {
          div.innerHTML = '服务断开'
        })
      },
      serveChart_socketIo(){
        this.socket = io('http://localhost:5000');
        var div = document.querySelector('#chartContent');

        this.socket.emit('comeIn',{
          // name: this.randomString(6)
          name: this.$store.state.userName
        });
        this.socket.on('comeSuccess', data =>{
          let dv = document.createElement('div');
          dv.innerText = '连接服务器成功......';
          dv.className = 'newDivClass';
          div.appendChild(dv);
          this.$store.state.userName = data.name;
        });
        this.socket.on('loginError', function() {
          alert('用户名存在')
        });
        this.socket.on('addUser', data => {
          let dv = document.createElement('div');
          dv.innerText = '用户'+data.name+'进入了直播间';
          dv.className = 'newDivClass';
          div.appendChild(dv);
        });
        this.socket.on('userList', data =>{
          console.log("当前用户列表"+data);
        });
        this.socket.on('delUser', data => {
          let dv = document.createElement('div');
          dv.innerText = '有用户退出了直播间';
          dv.className = 'newDivClass';
          div.appendChild(dv);
          console.log("退出了--"+data);
        });
        this.socket.on('receiveMessage', data => {
          console.log("我收到消息"+data);
            this.commentsList.push(data);
        })
      },
      sendMessage(){
        var input = document.querySelector('input');
        if(input.value!==''){
          this.socket.emit('sendMessage', {
            paiZi: this.$store.state.paiZi,
            paiZiLevel: this.$store.state.paiZiLevel,
            userLevel:'UL ' + this.$store.state.userLevel,
            name: this.$store.state.userName,
            say: ":"+input.value
          });
          input.value = ''
        }else{
          console.log('不能发送空消息');
          this.$message('不能发送空消息');
        }
      },
      randomString(e){
        var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
          a = t.length,
          n = "";
        for (let i = 0; i < e; i++)
          n += t.charAt(Math.floor(Math.random() * a));
        return n;
      },
      getUserInfo(tel){
        getUserInfo(tel).then(res => {
          this.userData = res.user[0];
          this.$store.state.userName = this.userData.userName;
          this.$store.state.paiZi = this.userData.paiZi;
          this.$store.state.paiZiLevel = this.userData.paiZiLevel;
          this.$store.state.userLevel = this.userData.userLevel;;
        })
      },
      getOut(){
        this.socket.emit('myDiscount', {
          message:'close'
        });
      }
    },
    mounted() {
      if(this.$store.state.token === 'unLogin'){
        this.$confirm('主人,还没登录呢~', '(#`O′)', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '登录之后就可以愉快的玩耍啦~~~'
          });
          this.$router.push({
            name:'login',
            query:{
              id:'/watching/onlineShow'
            }
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '你不要我了的吗,嘤嘤嘤~~~'
          });
          this.$router.go(-1);
        });
      }else {
        this.getUserInfo(this.$store.state.tel);
        window.setTimeout(()=>{
          if(this.$store.state.userName===undefined){
            this.$confirm('请完善信息', '(#`O′)', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '让我更了解你吧~~~'
              });
              this.$router.push({
                name:'info',
                // query:{
                //   id:'/watching/onlineShow'
                // }
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '为什么不让我了解你？'
              });
              this.$router.go(-3);
            });
          }else{
            this.serveChart_socketIo();
            // this.serveChart_webSocket();
          }
        },1000);
      }
    }
  }
</script>
<style scoped>
  @import "css/index.css";
</style>
