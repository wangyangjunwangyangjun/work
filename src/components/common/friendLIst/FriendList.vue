<template>
  <div id="friendContent">
    <mu-container id="Content">
      <mu-row id="muRow">
        <mu-col span="10" offset="1">
          <mu-paper :z-depth="2">
            <mu-list>
              <mu-sub-header>Today</mu-sub-header>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../assets/img/logo.png">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Mike Li</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../assets/img/logo.png">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Maco Mai</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../assets/img/logo.png">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Alex Qin</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../assets/img/logo.png">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Allen Qun</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../assets/img/logo.png">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Myron Liu</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
            <mu-divider></mu-divider>
            <mu-list>
              <mu-sub-header>History</mu-sub-header>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../assets/img/logo.png">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Gaia Zhou</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../assets/img/logo.png">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Miller Wang</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
          </mu-paper>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
  export default {
    name: "FriendList"
  }
</script>

<style scoped>
  @import "../../../assets/css/content/views/friends.css";
</style>
