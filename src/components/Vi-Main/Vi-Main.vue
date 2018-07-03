<template>
<div class="Vi-Main">
  <ViM-Video class="Vi-Main-video"></ViM-Video>
  <ViM-Infor class="Vi-Main-infor"></ViM-Infor>
</div>
</template>
<script>
import infor from './Vim-Infor.vue'
import video from './ViM-Video.vue'

export default {
  components: {
    'ViM-Infor': infor,
    'ViM-Video': video
  }
}
</script>
<style lang='scss' scoped>
.Vi-Main{
  max-width:1000px;
  width:100%;
  height:100%;
}
</style>
