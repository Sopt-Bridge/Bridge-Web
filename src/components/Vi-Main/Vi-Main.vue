<template>
  <div class="Vi-Main">
    <ViM-Video></ViM-Video>
    <ViM-Infor></ViM-Infor>
  </div>
</template>
<script>
import infor from './Vim-Infor.vue'
import video from './ViM-Video.vue'

export default {
  components:{
    'ViM-Infor':infor,
    'ViM-Video':video
  }
}
</script>
<style lang='scss' scoped>

</style>
