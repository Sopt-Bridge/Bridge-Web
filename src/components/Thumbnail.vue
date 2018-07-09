<template>
<div class="VideoCard">
  <div class="VideoCard-content">
    <img class="VideoCard-content-thumb" src="@/assets/img/cms_temp_article_21120403550250@2x.png" alt="">
    <div class="VideoCard-content-play">
      <img src="@/assets/img/baseline-play_arrow-24px.svg" alt="">
    </div>
    <div class="VideoCard-content-time">04:29</div>
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
}
</style>
