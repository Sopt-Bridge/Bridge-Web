<template>
<div class="ViS-Recommended">
  <video-card v-for="i in 8" :key="i">
    <more slot="more"></more>
  </video-card>
</div>
</template>
<script>
import more from '../Card/Home-cardMore.vue'
import VideoCard from '../Card/VideoCard.vue'
export default {
  components: {
    'video-card': VideoCard,more
  }
}
</script>
<style lang='scss' scoped>
.ViS-Recommended {
  &-card {
    width: 528px;
  }
}
</style>
