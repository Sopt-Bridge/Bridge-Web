<template>
<div class="VideoCard" :class="{'videoCard-wrap':nowrap}" to="/video">
  <div class="VideoCard-content" :class="{'content-wrap':nowrap}">
    <router-link :to="{name:'video',params:{contentsIdx:item.contentsIdx,contentsType:item.contentsType}}">
      <div class="VideoCard-content-thumnail" :class="{'thumnail-wrap':nowrap}">
        <div class="VideoCard-content-thumnail-centered">
          <img class="VideoCard-content-thumnail-centered-img" v-if="item.thumbnailUrl" :class="{'img-wrap':nowrap}" :src="item.thumbnailUrl">
          <img class="VideoCard-content-thumnail-centered-img" v-else src="../../assets/img/no_detail_img.gif" alt="">
        </div>
      </div>
      <div class="VideoCard-content-play">
        <img v-if="item.contentsType === 1" src="@/assets/img/thumnail_video_icon.png" alt="">
        <img v-else-if="item.contentsType === 0" src="@/assets/img/thumnail_image_icon.png">
      </div>
      <div class="VideoCard-content-time">{{item.contentsRuntime}}</div>
    </router-link>
  </div>
  <div class="VideoCard-infor">
    <div class="VideoCard-infor-heading">
      <router-link :to="{name:'video'}">
        {{item.contentsTitle}}
      </router-link>
    </div>
    <div class="VideoCard-infor-moreBtn">
      <v-menu offset-x right :close-on-content-click="false">
        <v-icon slot="activator">more_vert</v-icon>
        <slot name="more">
        </slot>
      </v-menu>
    </div>
    <div class="VideoCard-infor-hastag">{{item.hashName1}} {{item.hashName2}} {{item.hashName3}}
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['nowrap', 'item'],
  data(){
    return {
      // item:null
    }
  },
  created() {
    
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
  // no
  // display:flex;
  height: 100%;
  &-content {
    background-color: rgb(173, 173, 173);
    height: 150px;
    @media screen and (max-width: 640px) {
      height:135px;
    }
    @media screen and (max-width:510px) {
      height: 110px;
    }
    @media screen and (max-width:450px) {
      height: 90px;
    }
    position: relative;
    &-thumnail {
      width: auto;
      height: 100%;
      position: relative;
      overflow: hidden;
      &-centered {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(50%, 50%);
        &-img {
          position: absolute;
          top: 0;
          left: 0;
          // no
          // width: 100%;
          width: auto;
          height: 100%;
          transform: translate(-50%, -50%);
        }
      }
    }
    &-play {
      background-color: rgba(255, 255, 255, 0.8);
      bottom: 0;
      left: 0;
      width: 11%;
      height: 19%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 70%;
        height: 70%;
      }
    }
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
    background-color: wheat;
    align-self: stretch;
    padding-top: 3%;
    padding-right: 2%;
    font-size: 16px;
    padding-left: 2%;
    white-space: nowrap;
    flex-grow: 1;
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
      max-height: 3.6em;
      min-height: 2.5em;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      a {
        text-decoration: none;
        color: #000000;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    &-moreBtn {
      position: absolute;
      right: 0;
      top: 5px;
      visibility: hidden;
    }
    &-hastag {
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

.thumbnail {
  position: relative;
  padding-top: 100%;
  /* 1:1 ratio */
  overflow: hidden;
}

.thumbnail .centered {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
}

.thumbnail .centered img {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
}

.videoCard-wrap {
  display: flex;
}

.content-wrap {
  height: auto;
  @media screen and (max-width: 640px) {
    height: auto;
  }
  @media screen and (max-width:510px) {
    height: auto;
  }
  @media screen and (max-width:450px) {
    height: auto;
  }
  @media screen and (min-width:641px) {
    height: auto;
  }
  width: 295px;
  @media screen and (max-width: 730px) {
    width: 250px;
  }
  @media screen and (max-width: 560px) {
    width: 210px;
  }
  @media screen and (max-width: 430px) {
    width: 190px;
  }
  @media screen and (max-width: 375px) {
    width: 140px;
  }
}

.thumnail-wrap {
  width: 100%;
}

.img-wrap {
  width: 100%;
}
</style>
