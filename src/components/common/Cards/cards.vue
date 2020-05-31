<template>
  <div>
    <van-overlay :show="show" @click="show = false" z-index="999">
      <div class="myWrapper" @click.stop>
        <mu-circular-progress class="demo-circular-progress" color="secondary" :stroke-width="5" :size="48"></mu-circular-progress>
      </div>
    </van-overlay>
    <div class="cards">
      <div class="showItem" @click="showDetail(index)" v-for="(item,index) in CardShowList" :key="index">
        <div class="Item">
          <mu-badge :content="item.duration" color="primary" class="showTag"></mu-badge>
          <el-image :src="item.pic">
            <img  alt="图片" class="showImg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>

          <div class="showInfo">
            <span class="showTitle">&nbsp;&nbsp;{{item.title}}</span>
            <div class="showUser">
              <div class="showAuthor">
                <i class="el-icon-s-custom"></i>
                <span>&nbsp;&nbsp;{{item.author}}</span>
              </div>
              <div class="iconPlay">
                <i class="el-icon-video-camera-solid"></i>
                <span>&nbsp;&nbsp;{{item.video_review}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        show:false
      }
    },
    name: "cards",
    methods: {
      showDetail(aid) {
        this.show = true;
        window.setTimeout(()=>
        this.turnTo(),1500);
      },
      turnTo() {
        this.show = false;
        this.$router.push({
          name: 'onlineShow'
        });
      }
    },
    props:{
      numberToShow:{
        type:Number,
        default:10
      },
      CardShowList:{
        type:undefined
      }
    },

  }
</script>

<style scoped>
  @import "../../../assets/css/content/show.css";
</style>
