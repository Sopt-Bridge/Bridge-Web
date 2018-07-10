<template>
<div class="VideoCard" :style="{flexWrap:wraping}" to="/video">
  <router-link :to="{name:'video'}">
    <div class="VideoCard-content">
      <img class="VideoCard-content-thumb" src="https://i.ytimg.com/vi/uM5UpRk-tuk/maxresdefault.jpg" alt="">
      <div class="VideoCard-content-play">
        <img src="@/assets/img/baseline-play_arrow-24px.svg" alt="">
      </div>
      <div class="VideoCard-content-time">04:29</div>
    </div>
  </router-link>
  <div class="VideoCard-infor">
    <div class="VideoCard-infor-heading">
      <router-link :to="{name:'video'}">
        BTS - FAKE LOVE @BTS PERFECT COMEBACK SHOW PLEASE FOLLOW FOLLOW ME EVERYDAY SUBSCRIBE ME ME
      </router-link>
    </div>
    <div class="VideoCard-infor-moreBtn">
      <v-menu offset-x right :close-on-content-click="false">
        <v-icon slot="activator">more_vert</v-icon>
        <slot name="more">
        </slot>
      </v-menu>
    </div>
    <div class="VideoCard-infor-hastag">#BTS #BANGTANTV
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      // wrap:'wrap'
    }
  },
  props: ['wrap'],
  computed: {
    wraping() {
      if (this.wrap) {
        return 'wrap'
      } else {
        return 'nowrap'
      }
    }
  },
  mounted() {
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    let more = document.getElementsByClassName('VideoCard-infor-moreBtn')
    if (isMobile()) {
      for (let i = 0; i < more.length; i++) {
        // console.log('실행됨')
        more[i].style.visibility = 'visible'
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.VideoCard {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &-content {
    flex-grow: 1;
    align-items: center;
    position: relative;
    &:hover &-play {
      animation: playHover 0.3s;
      background-color: rgba(227, 28, 157, 0.9);
    }
    @keyframes playHover {
      from {
        background-color: rgba(255, 255, 255, 0.8);
      }
      to {
        background-color: rgba(227, 28, 157, 0.9);
      }
    }
    &-thumb {
      width: 100%;
    }
    &-play {
      background-color: rgba(255, 255, 255, 0.8);
      bottom: 6px;
      left: 0;
      width: 13%;
      height: 20%;
      position: absolute;
      display: flex;
      justify-content: center;
    }
    &-time {
      color: white;
      font-size: 1.1vw;
      background-color: #000000;
      bottom: 5%;
      right: 3%;
      position: absolute;
    }
  }
  &-infor {
    // background-color: red;
    transition: none;
    align-self: stretch;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 25px;
    flex-grow: 1;
    // width: 50%;
    // box-sizing: border-box;
    font-size: 16px;
    padding-left: 2%;
    // white-space: nowrap;
    position: relative;
    &-heading {
      /* 한 줄 자르기 */
      display: inline-block;
      // width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* 여러 줄 자르기 추가 스타일 */
      white-space: normal;
      line-height: 1.2;
      height: 3.6em;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      a{
        text-decoration: none;
        color:#000000;
      }
      a:hover{
        text-decoration:underline;

      }
    }
    &-moreBtn {
      position: absolute;
      right: 0;
      top: 5px;
      visibility: hidden;
    }
    &-hastag {
      margin-top: 1em;
      color: #E31C9E;
    }
    @media screen and (max-width:1200px) {
      font-size: 14px;
    }
    @media screen and (max-width:1000px) {
      font-size: 13px;
    }
    @media screen and (max-width:768px) {
      font-size: 12px;
    }
    @media screen and (max-width:375px) {
      font-size: 10px;
    }
  }
}

.VideoCard:hover .VideoCard-infor-moreBtn {
  transition: none;
  visibility: visible;
}
</style>
