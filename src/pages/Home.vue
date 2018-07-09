<template>
<div class="Home">
  <navdrawer></navdrawer>
  <div class="home-components">
    <main-poster></main-poster>
    <contents :headTxt="nowTrend">
      <v-flex v-for="i in cards" :key="i" xs6 md3 slot="card">
        <video-card :wrap="true"></video-card>
      </v-flex>
    </contents>
  </div>
</div>
</template>

<script>
import contents from '../components/Contents/Contents.vue'

export default {
  data() {
    return {
      nowTrend: 'Now Trend',
      cards: 4
    }
  },
  components: {
    contents
  }


}
</script>

<style lang="scss" scoped>
@import 'styles/common.scss';
.home {
  &-components {
    max-width: 1380px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
