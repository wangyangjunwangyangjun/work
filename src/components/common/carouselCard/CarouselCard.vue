<template>
  <div>
    <carousel
      :imgUrl = "imgUrl"
      :height="height"
    ></carousel>
    <div class="item">
      <cards
        :CardShowList = "CardShowList"
        :numberToShow = "numberToShow"
      ></cards>
    </div>
  </div>
</template>

<script>
  import Carousel from "../carousel/carousel";
  import Cards from "../Cards/cards";
  export default {
    name: "CarouselCard",
    data(){
      return {
        height:'132px'
      }
    },
    components:{
      Carousel,
      Cards,
    },
    props:{
      imgUrl:{
        type:undefined
      },
      CardShowList:{
        type:undefined
      },
      numberToShow:{
        type:Number
      }
    }
  }
</script>

<style scoped>

</style>
