<template>
<div class="VideoCard" :style="{flexWrap:wraping}">
  <div class="VideoCard-content">
    <img class="VideoCard-content-thumb" src="@/assets/img/cms_temp_article_21120403550250@2x.png" alt="">
    <div class="VideoCard-content-play">
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
  data() {
    return {
      // wrap:'wrap'
    }
  },
  props: ['wrap'],
  computed: {
    wraping() {
      let out;
      if (this.wrap){
        out = 'wrap'
        }
      else{
        out = 'nowrap'
      }
      return out;
    }
  }
}
</script>
<style lang='scss' scoped>
.VideoCard {
  display: flex;
  flex-wrap:wrap;
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
    flex-grow: 1;
    // width: 50%;
    // display: flex;
    align-items: center;
    // background-color: brown;
    position: relative;
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
    flex-grow: 1;
    // width: 50%;
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
