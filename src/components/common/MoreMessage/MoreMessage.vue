<template>
  <mu-bottom-sheet :open.sync="open">
    <mu-list @item-click="closeBottomSheet">
      <mu-sub-header>Select One</mu-sub-header>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="grade" color="orange"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>举报</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="inbox" color="blue"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>收藏</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="chat" color="green"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>复制</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="email" color="cyan"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>更多</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-bottom-sheet>
</template>

<script>
  export default {
    name: "MoreMessage",
    props:{
      open: {
        type:Boolean,
        default: false
      }
    },
    methods:{
      closeBottomSheet () {
        this.$emit('closeBottomSheet');
      }
    }
  }
</script>

<style scoped>

</style>
