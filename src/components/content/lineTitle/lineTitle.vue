<template>
  <div class="myTop">
    <div class="myLeft">{{leftInfo}}</div>
    <div class="myRight">
      {{rightInfo}}
      <slot name="rightIcon"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lineTitle",
    props:{
      leftInfo:{
        type:String,
        default:'我的关注'
      },
      rightInfo:{
        type:String,
        default:'查看更多>'
      }
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/lineTitle.css';
</style>
