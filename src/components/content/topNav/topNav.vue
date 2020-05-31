<template>
  <div id="topNav">
    <mu-appbar id="headline">
      <mu-avatar slot="left" :size="35" id="userIcon" @click="handleOpen">
        <img :src="ImgSrc" alt="图片">
      </mu-avatar>
      <div slot="default" class="title">
        <div class="title-item">{{title}}</div>
      </div>
      <mu-icon slot="right" value="search" id="search"/>
    </mu-appbar>
      <mu-drawer :open.sync='open' :docked="docked" :right="position === 'right'" >
        <div class="content">
          <div class="top">
            <mu-avatar slot="left" :size="80" @click="handleLogin()" style="margin-left: 15px;margin-top: 15px;">
              <img :src="ImgSrc" alt="图片">
            </mu-avatar>
            <div class="name" id="userName">Silencer</div>
          </div>
          <div id="instruction">
            <span>这个人很懒，什么也没有写......</span>
          </div>
          <div class="line">
            <div class="lineitem">
              <div class="num">50</div>
              <div>动态</div>
            </div>
            <div class="lineitem">
              <div class="num" @click="handleClick()">222</div>
                <div>关注</div>
            </div>
            <div class="lineitem">
              <div class="num">34</div>
              <div>粉丝</div>
            </div>
          </div>
        </div>
        <mu-list class="sideNavIconInfo">
          <mu-list-item button>
            <mu-icon value="home" color="gray"></mu-icon>
            <mu-list-item-title><div class="IconInfo">首页</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="query_builder" color="gray" />
            <mu-list-item-title><div class="IconInfo">历史记录</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="vertical_align_bottom" color="gray" />
            <mu-list-item-title><div class="IconInfo">下载管理</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="star_outline" color="gray" />
            <mu-list-item-title><div class="IconInfo">我的收藏</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="adb" color="gray" />
            <mu-list-item-title><div class="IconInfo">主题设置</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="open_in_new" color="gray" />
            <mu-list-item-title><div class="IconInfo">发布</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="pages" color="gray" />
            <mu-list-item-title><div class="IconInfo">创作中心</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="dashboard" color="gray" />
            <mu-list-item-title><div class="IconInfo">热门活动</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="handleInfo()">
            <mu-icon value="spa" color="gray" />
            <mu-list-item-title><div class="IconInfo">信息完善</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-icon value="settings_phone" color="gray" />
            <mu-list-item-title><div class="IconInfo">联系客服</div></mu-list-item-title>
          </mu-list-item>
          <mu-list-item  @click="open = false" button>
            <mu-icon value="close" color="gray" />
            <mu-list-item-title><div class="IconInfo">关闭</div></mu-list-item-title>
          </mu-list-item>
        </mu-list>
        <mu-container class="bottom">
          <mu-bottom-nav id="muBottomNav">
            <div @click="handleSetting">
              <mu-bottom-nav-item title="设置" icon="settings_applications" ></mu-bottom-nav-item>
            </div>
            <div>
              <mu-bottom-nav-item title="主题" icon="color_lens"></mu-bottom-nav-item>
            </div>
            <div>
              <mu-bottom-nav-item title="夜间" icon="brightness_4"></mu-bottom-nav-item>
            </div>
          </mu-bottom-nav>
        </mu-container>
      </mu-drawer>
    </div>
</template>
<script>
  import Setting from "../../../views/setting/Setting";
export default {
  name:'topNav',
  data () {
    return {
      docked: false,
      open: false,
      position: 'left',
      ImgSrc: this.$store.state.logo
    }
  },
  props:{
    title:{
      type:String,
      default:'标题'
    },
  },
  components:{
    Setting
  },
  methods:{
    handleOpen(){
      this.open = !this.open;
    },
    handleClick(){
      this.$router.push(
        {name: 'guanZhu'}
      )
    },
    handleLogin(){
      return this.$store.state.token=='login'?this.$message("已登录"):this.$router.push({name: 'login'})
    },
    handleInfo(){
      if(this.$store.state.token=='login'){
        this.$router.push({
          name:'info'
        })
      }else{
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
              id:'/watching'
            }
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '你不要我了的吗,嘤嘤嘤~~~'
          });
          this.$router.go(-1);
        });
      }
    },
    handleSetting(){
      this.$router.push({
        name:"setting"
      })
    }
  }
}
</script>

<style scoped>
  @import '../../../assets/css/content/topNav.css';
</style>
