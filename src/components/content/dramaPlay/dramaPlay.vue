<template>
  <div class="wrapper">
    <div class="float-bar">
      <router-link to="/fanJu">
        <i aria-hidden="true" class="fa-arrow-left el-icon-back"></i>
      </router-link>
      <span class="span">{{dramaDetail.bangumi_title}}</span>
      <span class="index">(第{{index}}话)</span>
    </div>
    <video :src="videoSrc" class="video" controls="controls"></video>
    <div class="Anthology">
      <span>选集</span>
      <span class="new">更新至第 {{dramaDetail.newest_ep_index}} 话 ></span>
    </div>
    <div class="anthology_part">
      <ul class="list">
        <li @click="showIndex(item)" class="part" v-for="(item,index) in dramaDetail.episodes">
          <p class="part_name">第{{index}}话</p>
          <p class="part_title" >{{item.long_title}}</p>
        </li>
      </ul>
    </div>
    <div class="showInfo">
      <p class="title">简介</p>
      <p class="desc">{{dramaDetail.evaluate}}</p>
      <div class="tagAll">
        <p class="tagAbout">标签相关</p>
        <span class="tag" v-for="tag in dramaDetail.tags">{{tag.tag_name}}</span>
      </div>
     </div>
    <div class="ShowComment">
        <p class="comment">评论 <span>({{comment.length}})</span></p>
        <ul class="cmtList">
          <li v-for="(cmt, index) in comment">
            <van-skeleton title avatar :row="2" :loading="loading">
              <img :src="cmt.member.avatar" alt="" class="avatar">
              <span class="name">{{cmt.member.uname}}</span>
              <span class="ico" >
                  <i class="el-icon-star-off" aria-hidden="true" @click="star(index)"></i> {{cmt.like}}
                </span>
              <div class="commentContent" v-longPress="OpenBottomSheet">{{cmt.content.message}}</div>
            </van-skeleton>
          </li>
        </ul>
        <div class="talk">
            <img class="emoji" src="../../../assets/img/emoji.png" alt="图片"/>
            <input @keypress.enter="submitCmt" placeholder="说点什么" type="text"  v-model="cmtContent">
            <img @click="submitCmt" class="send" src="../../../assets/img/send.png" alt="图片"/>
        </div>
     </div>
    <more-message :open="open" @closeBottomSheet = "closeBottomSheet"></more-message>
  </div>
</template>

<script>
  import topNav from "../topNav/topNav";
  import '../../../components/common/longPress/LongPress'
  import MoreMessage from "../../common/MoreMessage/MoreMessage";
  import {getHomeMultidata_dramaPlayDetail,getHomeMultidata_dramaPlayReplies} from '../../../network/basic/home'
  export default {
     data() {
       return {
         videoSrc: '',
         dramaDetail: '',
         comment: [],
         cmtContent: '',
         index: 1,
         submitCmt:'',
         value:10,
         open: false,
         loading:true
       }
     },
    components:{
      topNav,MoreMessage
     },
   mounted() {
     setTimeout(()=>{
       this.loading = false
     },3000);
     this.getHomeMultidata_dramaPlayDetail();
     this.getHomeMultidata_dramaPlayReplies();
  },
  methods: {
    getHomeMultidata_dramaPlayDetail(){
      getHomeMultidata_dramaPlayDetail().then(res => {
        this.dramaDetail = res.result;
      })
    },
    getHomeMultidata_dramaPlayReplies(){
      getHomeMultidata_dramaPlayReplies().then(res => {
        this.comment = res.data.replies;
      })
    },
    showIndex(item){
      this.videoSrc = item.share_url
    },
    star(index){
      alert('点击了index评论'+index);
    },
    OpenBottomSheet() {
      this.open = !this.open;
    },
    closeBottomSheet() {
      this.open = false;
      this.$message("举报成功！");
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/content/dramaPlay.css';
</style>
