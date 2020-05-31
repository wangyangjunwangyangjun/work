<template>
  <el-carousel :interval="5000" :type="type" :height="height">
    <el-carousel-item v-for="(item,index) in imgUrl" :key="index">
      <el-image
        :src="handleDisplay(item)"
        :fit="handleElementImage"
      ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "carousel",
    props:{
      imgUrl:{
        type:Array
      },
      dType:{
        type:String,
        default:"pic"
      },
      fit:{
        type:String,
        default:'contain'
      },
      type:{
        type:String,
        default:'card'
      },
      height:{
        type:String,
        default:''
      }
    },
    computed:{
      handleElementImage(){
        return this.fit;
      },
    },
    methods:{
      handleDisplay(item){
        return this.dType==='pic'?item.pic:item.cover
      },
    }
  }
</script>

<style scoped>
  @import '../../../assets/css/content/carousel.css';
</style>
