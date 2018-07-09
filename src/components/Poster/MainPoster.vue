<template>
<div class="MainPoster">
    <div class="swiper-custom-section">
                <div class="swiper-custom-section-button">
                    <div class="swiper-custom-section-button-before" id="before" @click="beforePoster()">
                        <v-icon x-large color="grey">navigate_before</v-icon>
                    </div>
                    <v-spacer class="swiper-custom-section-spacer"/>
                    <div class="swiper-custom-section-button-next" id="next" @click="nextPoster()">
                        <v-icon x-large color="grey">navigate_next</v-icon>
                    </div>
                </div>
    </div>
    <swiper class="MainPoster-swiper" ref="mySwiper" :options="swiperOption">
        <swiper-slide class="MainPoster-swiper-slide" v-for="i in 4" :key="i">
            
        </swiper-slide>
            <div class="swiper-pagination swiper-custom-pagination" slot="pagination"/>
    </swiper>
    
</div>
</template>

<script>
import main_img from "../../assets/img/nu_est_33375.jpg";
export default {
  data() {
    return {
      main_img: main_img,
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods : {
      beforePoster(){
          
          this.$refs.mySwiper.swiper.slidePrev();
          
      },
      nextPoster(){
          this.$refs.mySwiper.swiper.slideNext();
      }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
.swiper {
  &-custom {
    &-section {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      z-index: 4;
      &-button {
        right: 92px;
        display: flex;
        position: absolute;
        justify-content: flex-end;
        width: 120px;
        bottom: -525.5px;

        //1000 860 500 376
        @include media("(max-width: 1000px)"){
            bottom : -463.5px;
        }
        @include media("(max-width: 860px)"){
            bottom : -344px;
            right : 50px;
        }
        @include media("(max-width: 500px)"){
            bottom : -262.5px;

        }
        @include media("(max-width: 376px)"){
            bottom : -202.5px;
        }
        &-before{
            cursor: pointer;
        }
        &-next{
            cursor: pointer;
        }
      }
      &-spacer {
        z-index: -1;
      }
    }
    &-pagination {
      text-align: right;
      padding-right: 120px;
      bottom: 30px;
      @include media("(max-width: 860px)"){
            padding-right : 77px;
        }
    }
  }
  &-pagination {
    &-bullet {
      &-active {
        background: $white-text;
      }
    }
  }
}

.MainPoster {
  z-index: 0;
  position: relative;
  &-swiper {
    &-slide {
      height: 543px;
      @media screen and (max-width: 1000px) {
        height: 480px;
      }
      @media screen and (max-width: 860px) {
        height: 360px;
      }
      @media screen and (max-width: 500px) {
        height: 280px;
      }
      @media screen and (max-width: 376px) {
        height: 220px;
      }
      background-position: center;
      background-size: 100% auto;
      background-color: red;
      background-image: url(https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/30/68/7a/30687a5b-ccc5-0b1a-3035-574c060f2508/cover-KARD.jpg/600x600bf.jpg);
    }
  }
}

.main-img {
  width: 100%;
  height: 100%;
  max-height: 547px;
}
</style>
