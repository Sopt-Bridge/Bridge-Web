<template>
<div class="ViM-Video">
  <video class="ViM-content-video" src="../../assets/video/PWAs_vs_Native.mp4" controls controlsList="nodownload"></video>
  <!-- <object class="ViM-content-video" data="../../assets/video/PWAs_vs_Native.mp4" height="450px" width="800px"></object>   -->
  <!-- <object class="ViM-content-video" data="https://www.youtube.com/embed/F7Z6SFr-abQ" type="" height="450px" width="800px"></object> -->
  <!-- <img class="ViM-Video-img" src="https://i.ytimg.com/vi/yBs2SrZ3QJM/maxresdefault.jpg" alt=""> -->
  <!-- <video></video> -->
</div>
</template>
<script>
export default {
  data(){
    return{
      source:"../../assets/video/PWAs_vs_Native.mp4"
    }
  }

}
</script>
<style lang='scss' scoped>
.ViM {
  &-Video {
    // width: 1000px;
    height: auto;
    background-color: yellow;
  }
  &-content{
    &-video{
      width:100%;
      // height:100%;
      // max-height: auto;
      // width:100%;
    }
  }
}
</style>
