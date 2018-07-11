<template>
<!-- <div class="Vi-Main" :style="{height:barHeight+'px'}"> -->
<div class="Vi-Main">
  <ViM-Video class="Vi-Main-video"></ViM-Video>
  <ViM-Infor class="Vi-Main-infor"></ViM-Infor>
</div>
</template>
<script>
import infor from './Vim-Infor.vue'
import video from './ViM-Video.vue'

export default {
  computed: {
    barHeight() {
      let height = window.screen.availHeight - 150;
      return height;
    }
  },
  components: {
    'ViM-Infor': infor,
    'ViM-Video': video
  }
}
</script>
<style lang='scss' scoped>
.Vi-Main {}
</style>
