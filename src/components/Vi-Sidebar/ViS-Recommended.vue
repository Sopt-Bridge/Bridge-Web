<template>
<div class="ViS-Recommended">
  <video-card v-resize="onResize" :nowrap="wrapBool" class="ViS-Recommended-card" v-for="(item,index) in getNextContents" :key="'visr'+index" :item="item">
    <more slot="more"></more>
  </video-card>
</div>
</template>
<script>
import more from '../Card/Home-cardMore.vue'
import VideoCard from '../Card/VideoCard.vue'
import {
  mapActions,
  mapGetters
} from 'vuex'

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
    },
    ...mapGetters(['getNextContents', 'getContents']),
    contentsIdx() {
      console.log(this.getContents.contentsIdx);
      return this.getContents.contentsIdx;
    }

  },
  methods: {
    onResize() {
      this.clientWidth = document.documentElement.clientWidth;
    },
    ...mapActions(['asyncSetNextContents'])
  },
  components: {
    'video-card': VideoCard,
    more
  },
  mounted() {
    let data = {
      lastcontentsIdx: 0,
      contentsIdx: this.$route.params.contentsIdx
    }
    this.asyncSetNextContents(data);
    this.onResize();
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
