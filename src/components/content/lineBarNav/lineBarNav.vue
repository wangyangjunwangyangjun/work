<template>
  <div id="lineBarNav">
    <mu-tabs :value.sync="active1" inverse color="secondary" center id="muTabs">
      <mu-tab>推荐</mu-tab>
      <mu-tab>直播</mu-tab>
      <mu-tab>热门</mu-tab>
      <mu-tab>影视</mu-tab>
      <mu-tab>学习</mu-tab>
    </mu-tabs>
    <div class="demo-text" v-if="active1 === 0">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
          <carousel-card
            :imgUrl="imgUrl"
            :isShow="isShow"
            :CardShowList = "CardShowList"
            :numberToShow = "numberToShow"
          ></carousel-card>
        </van-list>
      </van-pull-refresh>
    </div>
    <div class="demo-text" v-if="active1 === 1">
      <br>
      <carousel :imgUrl = "imgUrl2" :type="type" height="132px"></carousel>
      <line-block :showList="showList" class="lineBlock"></line-block>
      <line-title></line-title>
      <cards :numberToShow="numberToShow1" :CardShowList="CardShowList"></cards>
      <line-title :leftInfo="leftInfo" :rightInfo="rightInfo">
        <i class="el-icon-refresh" slot="rightIcon"></i>
      </line-title>
      <cards :numberToShow="numberToShow2" :CardShowList="CardShowList"></cards>
      <div class="moreShow">更多19752个推荐主播></div>
      <time-rank></time-rank>
      <div>
        <recommend-anchors :leftInfo="leftInfo2" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
        <recommend-anchors :leftInfo="leftInfo3" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
        <recommend-anchors :leftInfo="leftInfo4" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
        <recommend-anchors :leftInfo="leftInfo5" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
        <recommend-anchors :leftInfo="leftInfo6" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
        <recommend-anchors :leftInfo="leftInfo7" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
        <recommend-anchors :leftInfo="leftInfo8" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
        <recommend-anchors :leftInfo="leftInfo9" :rightInfo="rightInfo" :numberToShow="numberToShow1" :CardShowList="CardShowList"></recommend-anchors>
      </div>
    </div>
    <div class="demo-text" v-if="active1 === 2">
      <line-block></line-block>
      <div>
        <cards2></cards2>
      </div>
    </div>
    <div class="demo-text" v-if="active1 === 3">
      施工中。。。
    </div>
    <div class="demo-text" v-if="active1 === 4">
      施工中。。。
    </div>
  </div>
</template>

<script>
  import Carousel from '../../common/carousel/carousel'
  import LineBlock from "../lineBlock/lineBlock";
  import TimeRank from '../timeRank/timeRank'
  import Cards2 from '../../common/Cards2/Cards2'
  import LineTitle from '../lineTitle/lineTitle'
  import Cards from '../../common/Cards/cards'
  import CarouselCard from "../../common/carouselCard/CarouselCard";
  import RecommendAnchors from "../recommendAnchors/RecommendAnchors";
  import {getHomeMultidata_life} from "../../../network/basic/home";
  export default {
    name: "lineBarNav",
    data () {
      return {
        loading: false,
        finished: false,
        refreshing: false,
        isShow: true,
        active1: 0,
        type:'card',
        numberToShow1:2,
        numberToShow2:6,
        rightInfo:'换一换',
        leftInfo:'推荐主播',
        leftInfo2:'电台',
        leftInfo3:'视频唱见',
        leftInfo4:'王者荣耀',
        leftInfo5:'网游',
        leftInfo6:'手游',
        leftInfo7:'单机',
        leftInfo8:'娱乐',
        leftInfo9:'绘画',
        CardShowList:[],
        numberToShow:4
      };
    },
    components:{
      Carousel,
      Cards,
      Cards2,
      LineBlock,
      TimeRank,
      LineTitle,
      RecommendAnchors,
      CarouselCard
    },
    props:{
      imgUrl:{
        type:Array
      },
      imgUrl2:{
        type:Array
      },
      showList:{
        type:undefined
      },
    },
    methods:{
      onLoad() {
        setTimeout(() => {
          if (this.refreshing) {
            this.$message("已刷新");
            this.refreshing = false;
          }
          this.finished = true;
          this.loading = false;
        }, 1000);
      },
      onRefresh() {
        this.finished = true;
        this.loading = true;
        this.getMoreData();
        this.numberToShow+=4;
        this.onLoad();
      },
      getHomeMultidata_life() {
        getHomeMultidata_life().then(res => {
          this.CardShowList = res.data.slice(0,this.numberToShow);
          console.log(res);
        })
      },
      getMoreData() {
        getHomeMultidata_life().then(res => {
          let temp = res.data.slice(this.numberToShow, this.numberToShow+4);
          for(let i=0;i<4;i++){
            this.CardShowList.unshift(temp[i]);
          }
          console.log(this.CardShowList);
        })
      },
    },
    mounted() {
      this.getHomeMultidata_life();
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/lineBarNav.css';
</style>
