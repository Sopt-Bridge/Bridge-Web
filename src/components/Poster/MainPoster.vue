<template>
  <div class="MainPoster">
    <div class="swiper-custom-section">
      <div class="swiper-custom-section-button">
        <div class="swiper-custom-section-button-before" id="before" @click="beforePoster()">
          <v-icon x-large color="grey">navigate_before</v-icon>
        </div>
        <v-spacer class="swiper-custom-section-spacer" />
        <div class="swiper-custom-section-button-next" id="next" @click="nextPoster()">
          <v-icon x-large color="grey">navigate_next</v-icon>
        </div>
      </div>
    </div>
    <swiper class="MainPoster-swiper" ref="mySwiper" :options="swiperOption">
      <!-- <swiper-slide class="MainPoster-swiper-slide" v-for="item in 4" :key="item"> -->
  
      <swiper-slide v-resize="onResize" class="MainPoster-swiper-slide" v-for="(item,index) in slideItems" :key="index" :style="{backgroundImage:item}">
        <div class="MainPoster-swiper-slide-content">
          <div class="MainPoster-swiper-slide-content-tag">
            {{contents[index].tag}}
          </div>
          <div class="MainPoster-swiper-slide-content-title">
            {{contents[index].title1}}
          </div>
          <div class="MainPoster-swiper-slide-content-title">
            {{contents[index].title2}}
          </div>
          <div class="hidden-sm-and-down MainPoster-swiper-slide-content-subtitle">
            {{contents[index].subtitle}}
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-custom-pagination" slot="pagination" />
    </swiper>
  
  </div>
</template>

<script>
  import main_img from "../../assets/img/nu_est_33375.jpg";
  import img1 from '../../assets/img/blackpink.jpg';
  import img2 from '../../assets/img/nuest1.jpg';
  import img3 from '../../assets/img/nuest2.png';
  
  
  export default {
    data() {
      return {
        contents: [{
            tag: 'NEW',
            title1: "BLACKPINK",
            title2: "COMEBACK",
            subtitle: "Black Pink has returned to the new song."
          },
          {
            tag: 'HOT',
            title1: "NU'EST",
            title2: "COMEBACK",
            subtitle: "The title song of Dejavu at 6 p.m. on June 25 has already hit the jackpot."
          },
          {
            tag: 'NEW',
            title1: "NU'EST",
            title2: "CONCERT",
            subtitle: "NU'EST holds a concert. Let me ask of your attention."
          },
          {
            tag: 'LIVE',
            title1: "OH MY GIRL",
            title2: "LIVE",
            subtitle: "Oh my girl is on the radio. We ask for your attention."
          }
        ],
        windowSize: {
          x: 0,
          y: 0
        },
        slideItems: [
          `url(${img1})`,
          `url(${img2})`,
          `url(${img3})`,
          "url('http://29sfilm.com/uploads/event/2017/06/12/2017061210160196972167.jpg')",
  
        ],
        main_img: main_img,
        swiperOption: {
          slidesPerView: 1,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          autoplay: {
            delay: 4500,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        }
      };
    },
    methods: {
      onResize() {
        this.windowSize = {
          x: window.innerWidth,
          y: window.innerHeight
        }
        // console.log(this.windowSize.x+","+this.windowSize.y);
      },
      beforePoster() {
        this.$refs.mySwiper.swiper.slidePrev();
      },
      nextPoster() {
        this.$refs.mySwiper.swiper.slideNext();
      }
    },
    mounted() {
      this.onResize();
      // window.addEventListener("resize", console.log(window.screen.availWidth))
      // // 슬라이드 이미지 src를 가져온다
      // let slide = document.getElementsByClassName('MainPoster-swiper-slide')[0];
      // let src = slide.style.backgroundImage;
  
      // //이미지를 만들고 사이즈를 알아낸다.
      // let img = new Image();
      // src = src.substring(5,src.length-2);
      // img.src = src;
      // console.log('src&img')
      // console.log(src);
      // console.log(img);
      // console.log(img.width);
      // console.log(img.height);
  
      // //div의 사이즈를 가져온다.
      // console.log('div')
      // console.log(slide.style.width);
      // let slideWidth = slide.style.width;
      // slideWidth = Number(slideWidth.substring(0,slideWidth.length-2));
      // console.log(slideWidth);
    },
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
        z-index: 2;
        &-button {
          right: 92px;
          display: flex;
          position: absolute;
          justify-content: flex-end;
          width: 120px;
          bottom: -525.5px;
          //1000 860 500 376
          @include media("(max-width: 1000px)") {
            bottom: -463.5px;
          }
          @include media("(max-width: 860px)") {
            bottom: -344px;
            right: 50px;
          }
          @include media("(max-width: 500px)") {
            bottom: -262.5px;
          }
          @include media("(max-width: 376px)") {
            bottom: -202.5px;
          }
          &-before {
            cursor: pointer;
            i {
              width: 15px;
            }
          }
          &-next {
            cursor: pointer;
            i {
              width: 15px;
            }
          }
        }
        &-spacer {
          z-index: -1;
        }
      }
      &-pagination {
        z-index: 10;
        text-align: right;
        padding-right: 120px;
        bottom: 30px;
        @include media("(max-width: 860px)") {
          padding-right: 77px;
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
      position: relative;
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
        
        &-content {
          position: absolute;
          width: 400px;
          height: 150px;
          margin-top: 23%;
          margin-left: 5%;
          &-tag {
            width: 50px;
            height: 25px;
            background-color: $grey-text;
            text-align: center;
            line-height: 25px;
          }
          &-title {
            color: white;
            font-size: 60px;
            height: 50px;
            
            @media screen and (max-width: 860px) {
              font-size : 40px;
              height : 40px;
            }
            
          }
          &-subtitle {
            margin-top: 35px;
            color: white;
            font-size: 18px;
            @media screen and (max-width: 860px) {
              font-size : 15px;
              margin-top : 25px;
            }
            
          }
        }
      }
    }
  }
  
  .main-img {
    width: 100%;
    height: 100%;
    max-height: 547px;
  }
</style>
