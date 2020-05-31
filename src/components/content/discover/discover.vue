<template>
  <div class="friend">
    <div class="gap"></div>
    <div class="tab">
      <mu-tabs center>
        <mu-tab disabled class="muTab">
          <mu-icon value="star" color="yellow" size="43">
          </mu-icon>
          空间
        </mu-tab>
        <mu-tab disabled class="muTab">
          <mu-icon value="location_on" color="blue" size="43">
          </mu-icon>
          附近
        </mu-tab>
        <mu-tab disabled class="muTab">
          <mu-icon value="terrain" color="purple" size="43">
          </mu-icon>
          探索
        </mu-tab>
      </mu-tabs>
    </div>
    <div class="gap-1"></div>
    <mu-list>
      <div class="item">
        <mu-list-item title="Live">
          <mu-icon value="videocam" color="white"/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="myListItem">缓存录像</span>
          <mu-icon value="keyboard_arrow_right" class="rightFloat"/>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="Video">
          <mu-icon value="video_library" color="white"/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="myListItem">精彩视频</span>
          <mu-icon value="keyboard_arrow_right" class="rightFloat"/>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="Music">
          <mu-icon value="headset" color="white"/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="myListItem">音乐人生</span>
          <mu-icon value="keyboard_arrow_right" class="rightFloat"/>
        </mu-list-item>
      </div>
    </mu-list>

    <mu-list>
      <div class="item">
        <mu-list-item title="Book">
          <mu-icon
            value="book" color="white"/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="myListItem">书海遨游</span>
          <mu-icon value="keyboard_arrow_right" class="rightFloat"/>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="News">
          <mu-icon value="whatshot" color="white"/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="myListItem">热门推荐</span>
          <mu-icon value="keyboard_arrow_right" class="rightFloat"/>
        </mu-list-item>
        <mu-divider inset/>
        <mu-list-item title="Game">
          <mu-icon value="videogame_asset" color="white"/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="myListItem">放松一下</span>
          <mu-icon value="keyboard_arrow_right" class="rightFloat"/>
        </mu-list-item>
      </div>
    </mu-list>
    <mu-list>
      <div class="item">
        <mu-list-item title="Mucket">
          <mu-icon value="shopping_cart" color="white"/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="myListItem">购物时间</span>
          <mu-icon value="keyboard_arrow_right" class="rightFloat"/>
        </mu-list-item>
      </div>
    </mu-list>
  </div>
</template>
<script>
  export default ({
    name: 'discover'
  })
</script>
<style scoped>
  @import "../../../assets/css/content/discover.css";
</style>
