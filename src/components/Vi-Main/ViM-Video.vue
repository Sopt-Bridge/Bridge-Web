<template>
<div class="ViM-Video">
  <embed class="ViM-content-video" v-if="this.$route.params.contentsType===1" :src="getContents.contentsUrl">
  <img class="ViM-Video-img" v-if="this.$route.params.contentsType===0" :src="getContents.contentsUrl" alt="">
  <!-- <video class="ViM-content-video" v-if="getContents.contentsCategory===1" :src="getContents.contentsUrl" controls controlsList="nodownload"></video> -->
  <!-- <video></video> -->
  <!-- <object class="ViM-content-video" data="https://www.youtube.com/embed/F7Z6SFr-abQ" type=""></object> -->
  <!-- <embed class="ViM-content-video" src="https://bit.ly/2N9dgiV" type=""> -->
</div>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  data() {
    return {
      source: "../../assets/video/PWAs_vs_Native.mp4"
    }
  },
  computed: {
    ...mapGetters(['getContents'])
  },
  watch: {
    '$route': this.fetchData
  },
  methods: {
    ...mapActions(['asyncSetContents']),
    fetchData() {
      console.log('라우트 변경이 감지됨');
      let data = {
        contentsIdx: this.$route.params.contentsIdx,
        contentsType: this.$route.params.contentsType
      }
      this.asyncSetContents(data);
    }
  },
  created() {
    let data = {
      contentsIdx: this.$route.params.contentsIdx,
      contentsType: this.$route.params.contentsType
    }
    this.asyncSetContents(data);
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
    padding-top: 2.3%;
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
