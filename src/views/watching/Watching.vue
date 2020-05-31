<template>
  <div>
    <top-nav :title="title"></top-nav>
    <div id="watching">
      <line-bar-nav
        :imgUrl="imgUrl"
        :imgUrl2="imgUrl2"
        :showList="showList"
      ></line-bar-nav>
    </div>
  </div>
</template>

<script>
  import LineBarNav from "../../components/content/lineBarNav/lineBarNav";
  import TopNav from '../../components/content/topNav/topNav'
  import {getHomeMultidata_carousel} from "../../network/basic/home"

  export default {
    name: "Listening",
    components:{
      LineBarNav,
      TopNav
    },
    data(){
      return{
        imgUrl:[],
        imgUrl2:[],
        title:'首页',
        showList:[{
          name:require("../../assets/img/MyImg/icon_1.png"),
          info:"视频唱见"
        },{
          name:require("../../assets/img/MyImg/icon_2.png"),
          info:"英雄联盟"
        },{
          name:require("../../assets/img/MyImg/icon_3.png"),
          info:"逃离科塔夫"
        },{
          name:require("../../assets/img/MyImg/icon_4.png"),
          info:"王者荣耀"
        },{
          name:require("../../assets/img/MyImg/icon_5.png"),
          info:"娱乐"
        }, {
          name:require("../../assets/img/MyImg/icon_6.png"),
          info:"单机"
        },{
          name:require("../../assets/img/MyImg/icon_7.png"),
          info:"电台"
        },{
          name:require("../../assets/img/MyImg/icon_8.png"),
          info:"我的世界"
        },{
          name:require("../../assets/img/MyImg/icon_9.png"),
          info:"虚拟主播"
        },{
          name:require("../../assets/img/MyImg/icon_10.png"),
          info:"全部标签"
        }],

      }
    },
    methods: {
      getHomeMultidata_carousel() {
        getHomeMultidata_carousel().then(res => {
          this.imgUrl = res.data.slice(0,5);
          this.imgUrl2 = res.data.slice(5,10);
        })
      },

    },
    mounted() {
      this.getHomeMultidata_carousel();
      this.$store.state.shift = 'watching';
    },
  };
</script>

<style scoped>
  @import '../../assets/css/content/views/watching.css';
</style>
