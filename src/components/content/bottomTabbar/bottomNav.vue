<template>
  <div id="bottomNav">
    <mu-bottom-nav :value.sync="handleShift" shift @change="handleChange">
      <mu-bottom-nav-item value="watching" title="首页" icon="home"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="fanJu" title="番剧" icon="book"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="friend" title="VIP" icon="headset"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="find" title="发现" icon="pets"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="profile" title="会员购" icon="shop"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>

</template>
<script>
  export default {
    name: "MainTabBar",
    computed:{
      handleShift:{
        // console.log(this.$store.state.shift);
        get(){
          return this.$store.state.shift;
        },
        set(val){
          return this.$store.state.shift;
        }
      }
    },
    methods:{
      handleChange(val) {
        let userToken = this.$store.state.token;
        if(val==='friend'&&userToken==='unLogin'){
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
                id:'/friend'
              }
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '你不要我了的吗,嘤嘤嘤~~~'
            });
            this.$store.state.shift = 'watching'
          });
        }else{
          this.$store.state.shift = val;
          this.$router.push(val);
        }
      }
    },

  }
</script>

<style scoped>
  @import '../../../assets/css/content/bottomNav.css';
</style>
