<template>
<div class="Subscribe">
  <div class="Subscribe-heading">
    <div class="Subscribe-headingWrap">
      <h1 class="Subscribe-headingH1">PiCK</h1>
      <v-btn class="Subscribe-headingBtn" flat>
        <v-icon>add</v-icon>more
      </v-btn>
    </div>
    <div class="swiper">
      <div class="swiper-btn">
        <i class="material-icons">arrow_back_ios</i>
      </div>
      <swiper class="swiper1" :options="swiperOption1">
        <swiper-slide class="swiper-slide" v-for="i in 12" :key="'swiper1'+i">
          <div>
            <img class="swiper-slideImg" src="https://pbs.twimg.com/media/C-AFS8ZU0AAkoce.jpg" alt="">
            <div class="swiper-slideText">{{i}}</div>
          </div>
        </swiper-slide>
      </swiper>
      <swiper class="swiper2" :options="swiperOption2">
        <swiper-slide class="swiper-slide" v-for="i in 12" :key="'swiper2'+i">
          <img class="swiper-slideImg" src="https://pbs.twimg.com/media/C-AFS8ZU0AAkoce.jpg" alt="">
          <div class="swiper-slideText">#NU'EST</div>
        </swiper-slide>
      </swiper>
      <div class="swiper-btn">
        <i class="material-icons">arrow_forward_ios</i>
      </div>
    </div>
  </div>
  <div class="Subscribe-body">
    <div class="Subscribe-bodyHead">
      <div class="Subscribe-bodyLB">
        <h1 class="Subscribe-bodyH1">#BTS</h1>
        <!-- <div > -->
        <button class="Subcribe-bodyBtn" flat @click="subClick" :style="{color:subBtnColor}">
            <img :src="subscirbe" width="35px" alt="">
            <span>Subscribe</span>
          </button>
        <!-- </div> -->
      </div>
      <v-menu offset-x left>
        <button class="Subscribe-bodyUpload" slot="activator">
          Upload date
          <img :src="subFilter" width="25px" alt="">
        </button>
        <v-card>
          <v-list-tile class="menu-list-item">
            <v-list-tile-title>
              Upload data
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile class="menu-list-item">
            <v-list-tile-title>
              View count
            </v-list-tile-title>
          </v-list-tile>
        </v-card>

      </v-menu>
    </div>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex class="Subscribe-content-flex" v-for="i in 12" :key="i" xs12 sm6>
          <thumnail>
            <more-menu slot="more"></more-menu>
          </thumnail>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</div>
</template>

<script>
import thumnail from '../../components/Card/VideoCard.vue';
import moreMenu from '../../components/Card/Home-cardMore.vue'
import subNomarlBtn from '../../assets/img/subscribe/drawable-xxxhdpi/subscribe_normal_btn.png';
import subActivelBtn from '../../assets/img/subscribe/drawable-xxxhdpi/subscribe_active_btn.png';
import subFilter from '../../assets/img/subscribe/drawable-xxxhdpi/search_filter_icon.png';

export default {
  data() {
    return {
      subBool: true,
      swiperOption1: {
        slidesPerView: 6,
        spaceBetween: 1,
        lazy: true,
      },
      swiperOption2: {
        slidesPerView: 4,
        freeMode: true,
        lazy: true,
      },
      subFilter
    }
  },
  computed: {
    subscirbe() {
      if (this.subBool) {
        return subActivelBtn
      } else if (!this.subBool) {
        return subNomarlBtn
      }
    },
    subBtnColor() {
      if (this.subBool) {
        return '#E31c9e'
      } else if (!this.subBool) {
        return '#9A9A9A'
      }
    }
  },
  methods: {
    subClick() {
      this.subBool = !this.subBool;
    }
  },
  components: {
    'thumnail': thumnail,
    moreMenu
  }
}
</script>
<style lang='scss' scoped>
.Subscribe {
  @media screen and (min-width: 511px) {
    margin-top: 65px;
  }
  @media screen and (max-width: 510px) {
    margin-top: 109px;
  }
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  // background-color: blue;
  &-heading {
    // max-width: 1000px;
    // width: 100%;
    // margin: 0 auto;
    &Wrap {
      display: flex;
      align-items: center;
      // background-color: slategrey;
    }
    &Btn {
      color: #9A9A9A;
    }
    &H1 {
      font-size: 43px;
    }
  }
  .swiper {
    max-width: 1200px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    // margin-top:20px;
    // background-color: yellowgreen;
    text-align: center;
    &-slide {
      padding-top: 20px;
      // background-color: yellow;
      &Img {
        height: 120px;
        width: 120px;
        border-radius: 100%;
        @media screen and (max-width: 865px) {
          height: 100px;
          width: 100px;
        }
        @media screen and (max-width: 650px) {
          height: 85px;
          width: 85px;
        }
        &:hover {
          animation: popUp 0.2s;
          transform: scale(1.2);
          // box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.781);
        }
        @keyframes popUp {
          from {
            // box-shadow: none;
            transform: scale(1);
          }
          to {
            // box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.781);
            transform: scale(1.2);
          }
        }
      }
      &Text {
        width: 100%;
      }
    }
    &-btn {
      // background-color: azure;
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        display:none;
      }
    }
    &-btn i {
      // background-color: aqua;
      color: #CCCCCC;
      font-size: 42px;
    }
  }
  &-body {
    // max-width: 1300px;
    margin: 0 auto;
    margin-top: 50px;
    width: 100%;
    // background-color: coral;
    &Head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &LB {
      display: flex;
      align-items: center;
      .Subcribe-body {
        &Btn {
          margin-left: 40px;
          font-size: 22px;
          // background-color: chartreuse;
        }
      }
    }
    &Upload {
      // background-color: brown;
    }
  }
  &-content {
    &-flex {
      // background-color: cadetblue;
    }
  }
} //end of Subscribe
.Subscribe-bodyH1 {
  font-size: 43px;
}

.swiper1 {
  @media screen and (max-width: 521px) {
    display:none;
  }
}

.swiper2 {
  @media screen and (min-width: 520px) {
    display:none;
  }
}

.Subcribe-bodyBtn {
  display: flex;
  span {
    margin-left: 10px;
  }
}

.Subscribe-bodyUpload {
  // color:#E31c9e;
  font-size: 17px;
  img {
    margin-left: 10px;
  }
}

.menu-list-item:hover {
  transition: 0.3s;
  background-color: rgba(141, 141, 141, 0.5);
}
</style>
