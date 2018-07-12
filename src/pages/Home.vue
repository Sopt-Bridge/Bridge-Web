<template>
<div class="Home">
  <navdrawer :items="navItem" :position="position" @navBtnState="navBtnClick"></navdrawer>
  <div class="home-components">
    <main-poster></main-poster>
    <contents :headTxt="nowTrend">
      <v-flex v-for="(item,index) in homeNowTrendItem" :key="index" xs6 md3 slot="card">
        <video-card :nowrap="false" :item="item">
          <more-menu slot="more"></more-menu>
        </video-card>
      </v-flex>
    </contents>
  </div>
</div>
</template>

<script>
import contents from "../components/Contents/Contents.vue";
import moreMenu from "../components/Card/Home-cardMore";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      position: "homeNav",
      nowTrend: "Now Trend",
      postition: "home",
      cards: 4,
      navState: 1,
      navItem: [
        {
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
      ]
    };
  },
  computed: {
    ...mapGetters(["homeNowTrendItem"])
  },
  components: {
    contents,
    moreMenu
  },
  methods: {
    navBtnClick(index) {
      //navBtnClick하면 list 숫자를 입력하는 함수
      this.setHomeNowtrend(index);
      this.navState = index;
    },
    ...mapActions(["setHomeNowtrend"])
  },
  created() {
    this.setHomeNowtrend(this.navState);
  }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
.home {
  &-components {
    max-width: 1380px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
