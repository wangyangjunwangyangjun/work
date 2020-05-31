<template>
  <div>
    <div id="content3">
      <nav-bar>
        <i class="el-icon-back" slot="left"></i>
        <span slot="center">哔哩哔哩会员购</span>
        <i class="el-icon-goods" slot="right"></i>
      </nav-bar>
      <div id="profileContent">
        <search></search>
        <div id="lineBarNav2">
          <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center id="muTabs">
            <mu-tab>全部</mu-tab>
            <mu-tab>手办</mu-tab>
            <mu-tab>演出</mu-tab>
            <mu-tab>展览</mu-tab>
            <mu-tab>生活</mu-tab>
          </mu-tabs>
          <div class="demo-text" v-if="active1 === 0">
            <time-select></time-select>
            <tickets-list></tickets-list>
          </div>
          <div class="demo-text" v-if="active1 === 2">
            施工中。。。
          </div>
          <div class="demo-text" v-if="active1 === 3">
            施工中。。。
          </div>
          <div class="demo-text" v-if="active1 === 4">
            施工中。。。
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Search from "../../components/common/search/Search";
  import TimeSelect from "../../components/content/timeSelect/TimeSelect";
  import TicketsList from "../../components/content/ticketsList/TicketsList";
  export default {
    name: "Profile",
    data(){
      return {
        active1: 0,
      }
    },
    components:{
      NavBar,
      Search,
      TimeSelect,
      TicketsList,
    },
    mounted() {
      this.$store.state.shift = 'profile';
    }
  }
</script>

<style scoped>
  @import "../../assets/css/content/views/profile.css";
  @import "../../assets/css/content/lineBarNav.css";
</style>
