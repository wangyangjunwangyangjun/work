<template>
  <div class="wrapper">
    <div class="float-bar" >
      <router-link to="/reading">
        <i aria-hidden="true" class="fa-arrow-left el-icon-back"></i>
      </router-link>
      <span class="span">你的关注</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuanZhu",
    components:{
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/GuanZhu.css';
</style>
