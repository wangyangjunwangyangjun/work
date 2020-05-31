<template>
  <div>
    <line-title :leftInfo="leftInfo" :rightInfo="rightInfo">
      <i class="el-icon-refresh" slot="rightIcon"></i>
    </line-title>
    <cards :numberToShow="numberToShow" :CardShowList="CardShowList"></cards>
  </div>
</template>

<script>
  import LineTitle from '../lineTitle/lineTitle'
  import Cards from '../../common/Cards/cards'
  export default {
    name: "recommendAnchors",
    props:{
      leftInfo:{
        type:String
      },
      rightInfo:{
        type:String
      },
      numberToShow:{
        type:Number
      }
      ,CardShowList:{
        type:undefined
      }
    },
    components:{
      LineTitle,
      Cards
    }
  }
</script>

<style scoped>

</style>
