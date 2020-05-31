<template>
  <div>
    <div class="wrapper1">
      <drama-line-block></drama-line-block>
      <my-drama :showList="showList2"></my-drama>
      <more-drama></more-drama>
      <show-drama :showList="showList"></show-drama>
    </div>
  </div>
</template>

<script>
  import {getHomeMultidata_fanJu} from '../../../network/basic/home'
  import MyDrama from '../../../components/content/myDrama/myDrama'
  import ShowDrama from "../../content/showDrama/ShowDrama";
  import DramaLineBlock from '../../../components/content/dramaLineBlock/DramaLineBlock'
  import MoreDrama from "../moreDrama/MoreDrama";

export default {
  data(){
    return {
      showList:undefined,
      showList2:undefined,
    }
  },
  methods: {
    getHomeMultidata_fanJu() {
      getHomeMultidata_fanJu().then(res => {
        this.showList = res.result.list.slice(24);
        this.showList2 = res.result.list.slice(0,3);
      })
    }
  },
  mounted() {
    this.getHomeMultidata_fanJu();
  },
  components:{
    MyDrama,
    ShowDrama,
    DramaLineBlock,
    MoreDrama
  }
}
</script>

<style scoped>
  @import '../../../assets/css/content/drama.css';
</style>
