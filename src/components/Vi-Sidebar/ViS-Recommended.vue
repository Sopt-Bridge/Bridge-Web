<template>
<div class="ViS-Recommended">
  <!-- <div class="item" v-for="i in 8" :key="i"> -->
    <video-card></video-card>
  <!-- </div> -->
</div>
</template>
<script>
import VideoCard from '../Card/VideoCard.vue'
export default {
  components:{
    'video-card':VideoCard
  }
}
</script>
<style lang='scss' scoped>
.ViS-Recommended{
  &-card{
    width:528px;
  }
}
</style>
