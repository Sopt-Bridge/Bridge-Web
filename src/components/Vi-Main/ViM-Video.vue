<template>
<div class="ViM-Video">
  <video class="ViM-content-video" src="../../assets/video/PWAs_vs_Native.mp4" controls controlsList="nodownload"></video>
  <!-- <object class="ViM-content-video" data="https://www.youtube.com/embed/F7Z6SFr-abQ" type=""></object> -->
  <!-- <embed class="ViM-content-video" src="https://www.youtube.com/embed/F7Z6SFr-abQ" type=""> -->
  <!-- <img class="ViM-Video-img" src="https://i.ytimg.com/vi/yBs2SrZ3QJM/maxresdefault.jpg" alt=""> -->
  <!-- <video></video> -->
</div>
</template>
<script>
export default {
  data() {
    return {
      source: "../../assets/video/PWAs_vs_Native.mp4"
    }
  }
}
</script>
<style lang='scss' scoped>
.ViM {
  &-Video {
    position: relative;
    padding-bottom: 54%;
    /* 16:9 */
    padding-top: 25px;
    padding-top:2.3%;
    height: 0;
    border-radius: 5px;
    background-color: rgb(173, 173, 173);
    // @media screen and (max-width: 768px) {
    // padding-top: 19px;
    // }
    // @media screen and (max-width: 425px) {
    // padding-top: 15px;
    // }
  }
  &-content {
    &-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
