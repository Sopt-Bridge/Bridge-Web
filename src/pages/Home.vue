<template>
<div class="Home">
  <navdrawer :items="navItem" :position="position" @navBtnState="navBtnClick"></navdrawer>
  <div class="home-components">
    <main-poster></main-poster>
    <contents :headTxt="nowTrend">
      <v-flex v-for="i in cards" :key="i" xs6 md3 slot="card">
        <video-card :wrap="true">
          <more-menu slot="more"></more-menu>
        </video-card>
      </v-flex>
    </contents>
  </div>
</div>
</template>

<script>
import contents from '../components/Contents/Contents.vue'
import moreMenu from '../components/Card/Home-cardMore'
export default {
  data() {
    return {
      position:'homeNav',
      nowTrend: 'Now Trend',
      postition:'home',
      cards: 4,
      navState:0,
      navItem: [{
          title: "HOT"
        },
        {
          title: "K-content"
        },
        {
          title: "K-pop"
        },
        {
          title: "Fun"
        },
        {
          title: "Culture"
        }

      ],
    }
  },
  components: {
    contents,
    moreMenu
  },
  methods:{
    navBtnClick(index){
      this.navState=index;
      // console.log('navBtn'+index);
    }
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
