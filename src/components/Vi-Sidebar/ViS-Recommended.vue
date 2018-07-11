<template>
<div class="ViS-Recommended">
  <video-card v-resize="onResize" :wrap="wrapBool" class="ViS-Recommended-card" v-for="i in 9" :key="i">
    <more slot="more"></more>
  </video-card>
</div>
</template>
<script>
import more from '../Card/Home-cardMore.vue'
import VideoCard from '../Card/VideoCard.vue'
export default {
  data() {
    return {
      clientWidth: 0
    }
  },
  computed: {
    wrapBool() {
      if (this.clientWidth > 1024) {
        return false;
      } else {
        return true;
      }
      // return false;
    }
  },
  methods: {
    onResize() {
      this.clientWidth = document.documentElement.clientWidth;
    }
  },
  components: {
    'video-card': VideoCard,
    more
  },
  mounted() {
    this.onResize()
  },
}
</script>
<style lang='scss' scoped>
.ViS-Recommended {
  display: flex;
  flex-wrap: wrap;
  &-card {
    // max-width:300px;
  }
}
</style>
