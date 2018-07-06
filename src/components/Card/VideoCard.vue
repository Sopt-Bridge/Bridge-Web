<template>
<div class="VideoCard">
  <div class="VideoCard-content">
    <img class="VideoCard-content-thumb" src="@/assets/img/cms_temp_article_21120403550250@2x.png" alt="">
    <!-- <svg class="VideoCard-content-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>   -->
    <div class="VideoCard-content-play">
      <!-- <div class="VideoCard-content-playBtn">
      </div> -->
      <img src="@/assets/img/baseline-play_arrow-24px.svg" alt="">
    </div>
    <div class="VideoCard-content-time">04:29</div>
  </div>
  <div class="VideoCard-infor">
    <div class="VideoCard-infor-heading">
      BTS - FAKE LOVE @BTS PERFECT COMEBACK SHOW PLEASE FOLLOW FOLLOW ME EVERYDAY SUBSCRIBE ME ME
    </div>
    <div class="VideoCard-infor-hastag">
      #BTS #BANGTANTV
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
.VideoCard {
  display: flex;
  align-items: center;
  &:hover &-content-play {
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
  &-content {
    width: 50%;
    display: flex;
    align-items: center;
    // background-color: brown;
    position: relative;
    &-thumb {
      width: 100%;
    }
    &-play {
      background-color: rgba(255, 255, 255, 0.8);
      bottom: 0;
      left: 0;
      width: 13%;
      height: 20%;
      position: absolute;
      display: flex;
      justify-content: center;
      // align-content: center;
      // img {
      //   background-color: #e31c9d;
      //   align-self: center;
      //   width: 50%;
      //   height: 50%;
      // }
      // &:hover {
      //   animation: playHover 0.3s;
      //   background-color: rgba(227, 28, 157, 0.9);
      // }
      // @keyframes playHover {
      //   from {
      //     background-color: rgba(255, 255, 255, 0.8);
      //   }
      //   to {
      //     background-color: rgba(227, 28, 157, 0.9);
      //   }
      // }
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
    width: 50%;
    box-sizing: border-box;
    font-size: 16px;
    padding-left: 2%;
    // white-space: nowrap;
    &-heading {
      /* 한 줄 자르기 */
      display: inline-block;
      // width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* 여러 줄 자르기 추가 스타일 */
      white-space: normal;
      line-height: 1.3;
      height: 3.6em;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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
  // &:hover {
  //   animation: popUp 0.2s;
  //   transform: scale(1.05);
  //   // box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.781);
  // }
  // @keyframes popUp {
  //   from {
  //     // box-shadow: none;
  //     transform: scale(1);
  //   }
  //   to {
  //     // box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.781);
  //     transform: scale(1.05);
  //   }
  // }
}
</style>
