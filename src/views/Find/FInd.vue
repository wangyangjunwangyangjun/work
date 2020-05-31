<template>
  <div id="findContent">
    <top-nav :title="title"/>
    <discover></discover>
  </div>
</template>

<script>
  import Discover from '../../components/content/discover/discover'
  import topNav from "../../components/content/topNav/topNav";
  export default {
    name: "Words",
    data(){
      return{
        title:'发现'
      }
    },
    components:{
      Discover,
      topNav,
    },
    mounted() {
      this.$store.state.shift = 'find';
    }
  }
</script>

<style scoped>
  @import '../../assets/css/content/views/find.css';
</style>
