<template>
<div class="home">
  <navdrawer :items="navItem" :position="position" @navBtnState="navBtnClick"></navdrawer>
  <div class="home-components">
    <main-poster v-if="navState===0"></main-poster>
    <contents class="home-contents" v-if="navState===0" :headTxt="Trending">
      <v-flex v-for="(item,index) in homeNowTrendItem" :key="index" xs6 md3 slot="card">
        <video-card :nowrap="false" :item="item">
          <more-menu slot="more"></more-menu>
        </video-card>
      </v-flex>
    </contents>
    <contents class="home-contents" v-if="navState===0" :headTxt="Recommended">
      <v-flex v-for="(item,index) in homeRecommendItem" :key="index" xs6 md3 slot="card">
        <video-card :nowrap="false" :item="item">
          <more-menu slot="more"></more-menu>
        </video-card>
      </v-flex>
    </contents>
    <contents class="home-contents" :headTxt="Recent">
      <v-flex v-for="(item,index) in homeRecentItem" :key="index" xs6 md3 slot="card">
        <video-card :nowrap="false" :item="item">
          <more-menu slot="more"></more-menu>
        </video-card>
      </v-flex>
    </contents>
    <v-container fluid px-5 py-3>
      <v-layout row wrap>
        <button @click="readmoreClick" class="home-readMore">Read More</button>
      </v-layout>
    </v-container>
  </div>
</div>
</template>

<script>
import contents from "../components/Contents/Contents.vue";
import moreMenu from "../components/Card/Home-cardMore";
import {
  mapGetters,
  mapMutations,
  mapActions
} from "vuex";

export default {
  data() {
    return {
      position: "homeNav",
      Trending: "Trending",
      postition: "home",
      Recommended: 'Recommended',
      Recent: 'Recent',
      cards: 4,
      navState: 0,
      recentPage: 0,
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
      ]
    };
  },
  computed: {
    ...mapGetters(["homeNowTrendItem", 'homeRecommendItem', 'homeRecentItem'])
  },
  components: {
    contents,
    moreMenu
  },
  methods: {
    navBtnClick(category) {
      //navBtnClick하면 list 숫자를 입력하는 함수
      this.setHomeNowtrend(category);
      // this.setRecommend();
      this.setRecent({
        category: category,
        pageIdx: this.recentPage
      });
      this.navState = category;
      this.recentPage = 0;
    },
    readmoreClick() {
      this.recentPage++;
      this.setRecentReadMore({
        category: this.navState,
        pageIdx: this.recentPage
      });
    },
    ...mapActions(['setHomeNowtrend', 'setRecommend', 'setRecent','setRecentReadMore'])
  },
  created() {
    this.setHomeNowtrend(this.navState);
    this.setRecommend();
    this.setRecent({
      category: this.navState,
      pageIdx: this.recentPage
    });
  }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
$btnHoverColor: lighten(#adadad, 10%);
$btnFoucsColor: darken(#adadad, 20%);
.home {
  &-components {
    max-width: 1380px;
    margin-left: auto;
    margin-right: auto;
  }
  &-readMore {
    width: 100%;
    height: 40px;
    font-weight: bold;
    background-color: #adadad;
    &:hover {
      transition: 0.3s;
      box-shadow: 0 0 10px 0 $btnHoverColor;
      background-color: $btnHoverColor;
    }
    &:focus {
      background-color: $btnFoucsColor;
    }
  }
}
</style>
