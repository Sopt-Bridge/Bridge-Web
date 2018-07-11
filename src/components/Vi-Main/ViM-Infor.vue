<template>
<div class="ViM-Infor">
  <div class="ViM-Infor-heading">
    <div class="ViM-Infor-heading-text">BTS - FAKE LOVE @BTS PERFECT COMEBACK SHOW PLEASE FOLLOW FOLLOW ME EVERYDAY SUBSCRIBE ME ME
    </div>
    <div class="ViM-Infor-heading-more">
      <v-menu :close-on-content-click="false">
        <v-icon slot="activator">more_vert</v-icon>
        <more></more>
      </v-menu>
    </div>
  </div>
  <div class="ViM-Infor-tag">#BTS #BANGTANTV
  </div>
  <div class="ViM-Infor-time">3 min age</div>
  <div class="ViM-Infor-src">BTS Official Homepage https:/bts.isjndk_vkaocorp.com</div>
</div>
</template>
<script>
import more from '../Card/Home-cardMore.vue'
export default {
  components: {
    more
  }
}
</script>
<style lang='scss' scoped>
.ViM-Infor {
  height: 250px;
  &-heading {
    position: relative;
    // max-width: 1200px;
    // max-height: 68px;
    &-text {
      display: block;
      margin-top: 18px;
      margin-bottom: 8px;
      max-width: 850px;
      max-height: 68px;
      font-size: 23px;
      // padding-right:-300px;
      // background-color: red;
    }
    &-more {
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
  &-tag {
    // display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    color: violet;
    font-size: 23px;
  }
  &-time {
    margin-top: 15px;
    color: #acacac;
    font-size: 22px;
  }
  &-src {
    color: #acacac;
    font-size: 22px;
  }
}
</style>
