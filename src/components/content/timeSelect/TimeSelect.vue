<template>
  <div>
    <div class="div1" v-show="isShow" @click="handleClick()">
      <div class="project-sort">
        <div class="sort-header">
          <div class="li-item">全部时间</div>
          <div class="li-item">本周</div>
          <div class="li-item">本月</div>
        </div>
      </div>
      <mu-flex justify-content="between" align-items="end" wrap="wrap">
        <mu-paper class="demo-date-picker">
          <mu-date-picker :date.sync="date" ></mu-date-picker>
        </mu-paper>
      </mu-flex>
    </div>
    <div class="filter-bar">
      <div class="filter-item" @click="handleClick()">
        全部时间
        <i class="el-icon-caret-bottom"></i>
      </div>
      <div class="filter-item_2">
        <span>拼团</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TimeSelect",
    data () {
      return {
        date: undefined,
        isShow:false,
      };
    },
    methods:{
      handleClick(){
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/timeSelect.css';
</style>
