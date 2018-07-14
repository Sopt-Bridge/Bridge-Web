<template>
<div class="VideoContents">
  <div class="VideoContents-container">
    <Vi-Main class="VideoContents-main"></Vi-Main>
    <Vi-Sidebar class="VideoContents-sidebar"></Vi-Sidebar>
  </div>
</div>
</template>
<script>
import {
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapMutations(['setContents']),
    ...mapGetters(['getContents'])
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions(['asyncSetContents']),
    fetchData() {
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
.VideoContents {
  display: flex;
  justify-content: center;
  &-container {
    display: flex;
    flex-wrap: none;
    margin-top: 15px;
    justify-content: center;
    // margin-left: auto;
    // margin-right: auto;
    width:90%;
    // @media screen and (max-width:1280px) {
    // max-width: 1280px;
    // }
    @media screen and (max-width: 1024px) {
      width:90%;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 769px) {
      width: 100%;
      margin-top: 0;
    }
  }
  &-main {
    width: 70%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
  &-sidebar {
    width: 31%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 769px) {
      width: 90%;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
    }
  }
}
</style>
