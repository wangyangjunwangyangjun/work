<template>
  <div class="show-content">
    <div class="showItem1" @click="playDetail(item.season_id)" v-for="(item,index) in showList" :key="index">
      <img :src="item.cover" alt="图片" class="showImg">
      <div class="showInfo">
        <span class="showTitle">{{item.title}}</span>
        <p class="showNum">{{item.new_ep.index_show}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowDrama",
    methods:{
      playDetail(season_id) {
        alert("season_id is" + season_id);
        this.$router.push(
          {name: 'dramaPlay', params: {'season_id': season_id}}
        )
      },
    },
    props:{
      showList:{
        type:undefined,
      }
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/drama.css';
</style>
