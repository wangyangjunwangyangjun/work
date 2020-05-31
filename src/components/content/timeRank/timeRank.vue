<template>
  <div>
    <line-title :leftInfo="leftInfo" :rightInfo="rightInfo"></line-title>
    <div>
      <div class="banner-item">
        <div class="myItem" v-for="(item,index) in ShowList">
          <el-avatar :src="item.pic" :size="handleSize(index)"></el-avatar>
          <p class="item-info">{{item.owner.name}}</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
  import lineTitle from "../lineTitle/lineTitle";
  import lineBlock from "../lineBlock/lineBlock";
  import {getHomeMultidata_music} from '../../../network/basic/home'
  export default {
    name: "timeRank",
    data(){
      return {
        leftInfo:'小时榜',
        rightInfo:'查看更多>',
        sizeArray:[50,70,50],
        ShowList:[{
          pic: undefined,
          owner:{
            name:''
          }
        }]
      }
    },
    components:{
      lineTitle,
      lineBlock
    },
    methods:{
      getHomeMultidata_music(){
        getHomeMultidata_music().then(res => {
          // console.log('importantMessage:'+JSON.stringify(res));
          this.ShowList = res.data.archives.slice(0,3);
          // console.log('importantMessage:'+JSON.stringify(this.ShowList));
        })
      },
      handleSize(index){
        return this.sizeArray[index];
      }
    },
    mounted(){
      this.getHomeMultidata_music()
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/timeRank.css';
</style>
