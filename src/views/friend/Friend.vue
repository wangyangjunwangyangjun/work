<template>
  <div>
    <top-nav :title="title"></top-nav>
    <friend-list></friend-list>
  </div>
</template>

<script>
  import TopNav from '../../components/content/topNav/topNav'
  import FriendList from "../../components/common/friendLIst/FriendList";
  export default {
    name: "Friend",
    data(){
      return {
        title:"朋友"
      }
    },
    components:{
      TopNav,
      FriendList
    },
    mounted() {
      this.$store.state.shift = 'friend';
    }
  }
</script>

<style scoped>
  @import '../../assets/css/content/views/home.css';
</style>
