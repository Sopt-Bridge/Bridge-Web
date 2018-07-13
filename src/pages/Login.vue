<template>
  <div class="Login">
    <div class="Login-topLine"></div>
    <div class="Login-bgWrap">
      <div class="Login-bgCenter">
        <img class="Login-bgImg" :src="bgImg" alt="">
      </div>
      <div class="Login-blind"></div>
    </div>
  
    <div class="Login-content">
      <div class="Login-logo" onClick="window.location.reload()">
        <img class="Login-logo-img" :src="bridge" alt="">
      </div>
  
      <div class="Login-content-wrap">
        <div class="Login-rand" v-if="isRand===true">
          <div class="Login-rand-text">We, Korean offer<br/>the best K-content for you !</div>
          <div class="Login-rand-btn">
            <div class="Login-rand-btnTxt" @click="isRand = !isRand">
              START
            </div>
          </div>
        </div>
        <div class="Login-login" v-if="isRand===false">
          <div class="Login-login-wrap">
  
            
              <div class="Login-login-logoImg">
                <img :src="bridge" alt="">
                <div class="Login-login-logoText">BRIDGE</div>
              </div>
              <router-link :to="{ name : 'Home'}" class="toHome">
              <div class="Login-login-btn" v-for="(btn,index) in btnContents" :key="index">
                <img :src="btn.img" alt="">
  
                <div class="Login-login-btnText">
                  {{btn.text}}
                </div>
  
              </div>
              </router-link>
              <!-- <router-link to="/home" class="Login-login-without">
                  Start without an acoount
                </router-link> -->
            
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
  import facebookLogo from '../assets/img/f@2x.png'
  import googleLogo from '../assets/img/google-logo-28FA7991AF-seeklogo.com@2x.png'
  import bridge from '../assets/img/white_bridge_logo.png'
  import bgImg0 from '../assets/img/land1.png'
  import bgImg1 from '../assets/img/land2.png'
  import bgImg2 from '../assets/img/land3.png'
  import bgImg3 from '../assets/img/land4.png'
  import bgImg4 from '../assets/img/land5.png'
  
  export default {
    data() {
      return {
        isRand: true,
        imgState: 1,
        btnContents: [{
          img: googleLogo,
          text: 'Sign in with Google'
        }, {
          img: facebookLogo,
          text: 'Sign in with Facebook'
        }],
        isMobile: false,
        bridge,
        bgImg: bgImg1,
      }
    },
    methods: {
      onStart() {
        this.isRand = false;
      }
    },
  }
</script>

<style lang='scss' scoped>
  @import "styles/common.scss";
  $main-color-active: lighten($main-color, 10%);
  $main-color-darken: darken($main-color, 10%);
  .toHome{
    text-decoration: none;
    color : black;
  }
  .Login {
    position: relative;
    margin-top: 0;
    height: 100%;
    background-color: blue;
    &-topLine {
      // position: absolute;
      // top: 0;
      height: 6px;
      // width: 100%;
      background-color: $main-color;
    }
    &-bg {
      &Wrap {
        position: relative;
        height: calc(100% - 6px);
        background-color: rgb(10, 10, 10);
        overflow: hidden;
        .Login-blind {
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.39);
        }
        .Login-bgCenter {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: translate(50%, 50%);
        }
        .Login-bgImg {
          position: absolute;
          top: 0;
          left: 0;
          width: auto;
          // height: 100%;
          transform: translate(-50%, -50%);
        }
      }
    }
    &-logo {
      // background-color: red;
      img {
        cursor: pointer;
        margin-left: 3.5%;
        margin-top: 1%;
        height: 39px;
      }
    }
    &-content {
      position: absolute;
      // background-color: pink;
      top: 0px;
      // top:30%;
      width: 100%;
      height: 100%;
      padding-top: 6px;
      // bottom:50%;
      &-wrap {
        position: relative;
        top: 20%;
      }
    }
    &-rand {
      // top:50%;
      font-size: 4vw;
      padding-left: 5vw;
      &-text {
        // background-color: black;
        color: white;
        @media screen and (max-width: 1600px) {
          font-size:70px;
        }
        @media screen and (max-width: 900px) {
          font-size: 7.6vw;
        }
      }
      &-btn {
        background-color: $main-color;
        width: 276px;
        height: 83px;
        color: white;
        font-size: 34px;
        margin-top: 3vh;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        &:hover {
          background-color: $main-color-active;
          transition: 0.1s;
        }
        &:active {
          transform: scale(1.005);
          outline-color: $main-color-darken;
        }
      }
    }
    &-login {
      display: flex;
      position: absolute;
      margin-top: 0;
      // left: 39%;
      width: 100%;
      // background-color: red;
      height: 100%;
      text-align: center;
      justify-content: center;
      &-logo {
        text-align: center;
        &Img {
          margin-bottom: 2vh;
          img {
            width: 210px;
          }
        }
        &Text {
          color: white;
          font-size: 50px;
        }
      }
      &-btn {
        background-color: #FFFFFF;
        width: 334px;
        height: 75px;
        display: flex;
        // justify-content: center;
        align-items: center;
        margin-top: 1vh;
        margin-bottom: 1vh;
        font-size: 18px;
        img {
          width: 9%;
          height: 35%;
          margin-left: 30px;
          margin-right: 20px;
        }
      }
      &-without {
        text-decoration: none;
        color: white;
        &:hover {
          text-decoration: underline;
          text-decoration-color: white;
        }
      }
    }
  }
  
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-enter {
    transform: translateX(-100px);
    opacity: 0;
  }
  
  .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
</style>

