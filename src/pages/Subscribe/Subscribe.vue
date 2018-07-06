<template>
<div class="Subscribe">
  <div class="Subscribe-heading">
    <div class="Subscribe-headingWrap">
      <h1 class="Subscribe-headingH1">PiCK</h1>
      <div class="Subscribe-headingBtn">
        + more
      </div>
    </div>
    <div class="swiper">
      <div class="swiper-btn">
        <i class="material-icons">arrow_back_ios</i>
      </div>
      <swiper class="swiper1" :options="swiperOption1">
        <swiper-slide class="swiper-slide" v-for="i in 12" :key="i">
          <img class="swiper-slideImg" src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/30/68/7a/30687a5b-ccc5-0b1a-3035-574c060f2508/cover-KARD.jpg/600x600bf.jpg" alt="">
          <div class="swiper-slideText">{{i}}</div>
        </swiper-slide>
      </swiper>
      <swiper class="swiper2" :options="swiperOption2">
        <swiper-slide class="swiper-slide" v-for="i in 12" :key="i">
          <img class="swiper-slideImg" src="@/assets/img/baseline-subdirectory_arrow_right-24px.svg" alt="">
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
        <div class="Subcribe-bodyBtn">Subscribe</div>
      </div>
      <div class="Subscribe-bodyUpload">Upload date</div>
    </div>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex class="Subscribe-content-flex" v-for="i in 12" :key="i" xs12 sm6>
          <thumnail></thumnail>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</div>
</template>

<script>
import thumnail from '../../components/Card/VideoCard.vue';

export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption1: {
        slidesPerView: 6,
      },
      swiperOption2: {
        slidesPerView: 4,
        freeMode: true,
      }
    }
  },
  components: {
    'thumnail': thumnail
  }
}
</script>
<style lang='scss' scoped>
.Subscribe {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  background-color: blue;
  &-heading {
    // max-width: 1000px;
    // width: 100%;
    margin: 0 auto;
    &Wrap {
      display: flex;
      align-items: center;
      background-color: slategrey;
    }
    &H1 {
      font-size: 43px;
    }
  }
  .swiper {
    max-width:1200px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    // margin-top:20px;
    background-color: yellowgreen;
    text-align: center;
    
    &-slide {
      padding-top:20px;
      // background-color: yellow;
      &Img {
        height: 100px;
        border-radius: 100%;
        @media screen and (max-width: 768px) {
          height: 77px;
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
      background-color: azure;
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        display:none;
      }
    }
    &-btn i {
      background-color: aqua;
      color: #CCCCCC;
      font-size: 42px;
    }
  }
  &-body {
    // max-width: 1300px;
    margin: 0 auto;
    margin-top:50px;
    width: 100%;
    background-color: coral;
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
          background-color: chartreuse;
        }
      }
    }
    &Upload {
      background-color: brown;
    }
  }
  &-content {
    &-flex {
      background-color: cadetblue;
    }
  }
} //end of Subscribe
.Subscribe-bodyH1 {
  font-size: 43px;
}

.swiper1 {
  @media screen and (max-width: 520px) {
    display:none;
  }
}

.swiper2 {
  @media screen and (min-width: 520px) {
    display:none;
  }
}
</style>
