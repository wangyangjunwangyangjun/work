<template>
  <div class="banner-item">
    <div v-for="item in showList">
      <div class="myitem">
        <el-avatar :src="item.name"></el-avatar>
        <p class="item-info">{{item.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lineBlock",
    props:{
      showList:Array,
      default:[{
        name:'',
        info:''
      }]
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/lineBlock.css';
</style>
