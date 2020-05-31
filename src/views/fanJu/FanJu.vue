<template>
    <div id="readingContent">
      <top-nav :title="title"/>
      <carousel :imgUrl="showList" :dType="dType"></carousel>
      <drama></drama>
    </div>
</template>

<script>
  import TopNav from '../../components/content/topNav/topNav'
  import Drama from '../../../src/components/common/drama/drama'
  import Carousel from '../../../src/components/common/carousel/carousel'
  import {getHomeMultidata_guoman} from "../../network/basic/home"
  export default {
    name: "Reading",
    components:{
      Drama,
      Carousel,
      TopNav
    },
    data(){
      return {
        showList:[],
        dType:'result',
        title:'番剧'
      }
    },
    methods: {
      getHomeMultidata_guoman() {
        getHomeMultidata_guoman().then(res => {
          console.log(res);
          this.showList = res.result.list.slice(0,4);
        })
      },

    },
    mounted() {
      this.getHomeMultidata_guoman();
      this.$store.state.shift = 'fanJu';
    },
  }
</script>

<style scoped>
@import '../../assets/css/content/views/fanJu.css';
</style>
