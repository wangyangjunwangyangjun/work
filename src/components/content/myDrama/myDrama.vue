<template>
  <div class="myDrama">
    <div class="myTop1">
      <div class="myLeft1">我的追番</div>
      <div class="myRight1">查看全部></div>
    </div>
    <div id="lineBlock2" >
      <div class="blockItem" v-for="item in showList">
        <div id="myItem">
          <el-image
            :src="item.cover"
            :fit="fit"
            id="myImg">
          </el-image>
          <div class="myBottomLeft">排名{{item.rank}}</div>
          <div class="myTopRight">{{item.badge}}</div>
        </div>
        <div id="content2">
          <div class="myTitle">{{item.title}}</div>
          <div class="myLatest">{{item.new_ep.index_show}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myDrama",
    props:{
      showList:undefined,
      fit:{
        default:'cover'
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/content/myDrama.css";
</style>
