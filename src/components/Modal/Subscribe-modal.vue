<template>
<div class="Subscribe-Modal">
  <Modal :popState="dialog" @closing="closing">
    <v-btn @click="opening" slot="activator" flat>
      <span><v-icon>add</v-icon></span>more
    </v-btn>
    <!-- myPage-Modal-card-body -->
    <div class="smcb" slot="contents">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm6 class="smcb-card" v-for="(item,index) in getrecommendHashList" :key="index">
            <div class="smcb-card-wrapper">

              <!-- <img class="smcb-card-img" src="http://ilyricsbuzz.com/wp-content/uploads/2015/01/Eddy-Kim-Sing-Sing-Sing.jpg"> -->
              <img v-if="!item.hashImg" :src="noImg" alt="" class="smcb-card-img">
              <img v-if="item.hashImg" class="smcb-card-img" :src="item.hashImg">
              <div class="smcb-card-infor">
                <div class="smcb-card-infor-hash">{{ item.hashName }}</div>
                <div class="smcb-card-infor-sub">구독자</div>
                <div class="smcb-card-infor-number">{{ item.hashCnt }}</div>
              </div>
              <div class="smcb-card-subBtn" @click="subClick">
                <button class="Subcribe-bodyBtn">
                  <img :src="subNomarlBtn" width="35px" alt="">
                  <!-- <div>Subscribe</div> -->
                </button>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </Modal>
</div>
</template>
<script>
import Modal from './Modal.vue'
import subNomarlBtn from '../../assets/img/subscribe/drawable-xxxhdpi/subscribe_normal_btn.png';
import subActivelBtn from '../../assets/img/subscribe/drawable-xxxhdpi/subscribe_active_btn.png';
import noImg from '../../assets/img/no_detail_img.gif'
import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      subBool: true,
      dialog: false,
      subNomarlBtn:subNomarlBtn,
      subActivelBtn:subActivelBtn,
      noImg : noImg
    }
  },
  computed: {
    ...mapGetters(['getrecommendHashList']),
    subscirbe() {
      if (this.subBool) {
        return subActivelBtn
      } else if (!this.subBool) {
        return subNomarlBtn
      }
    }
  },
  components: {
    'Modal': Modal
  },
  methods: {
    ...mapActions(['setrecommendHashList']),
    opening() {
      this.dialog = true;
    },
    closing() {
      this.dialog = false;
    },
    subClick(e) {
      if(e.target.src===subNomarlBtn){
        e.target.src=subActivelBtn
      }else{
        e.target.src=subNomarlBtn
      }
    }
  },
  created(){
    this.setrecommendHashList();
  }
}
</script>
<style lang='scss' scoped>
.smcb {
  overflow-y: scroll;
  height: 100%;
  background-color: white;
  &-card {
    &-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: blue;
    }
    &-img {
      // background-color: red;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      @media screen and (max-width: 720px) {
        width: 80px;
        height: 80px;
      }
    }
    &-infor {
      padding-left: 4%;
      flex-shrink: 2;
      flex-basis: 45%;
      // flex-basis: 200px;
      display: flex;
      flex-wrap: wrap;
      // background-color: aqua;
      &-hash {
        width: 100%;
        font-size: 24px;
        font-weight: bold;
      }
      &-sub {
        font-size: 13px;
        font-weight: bold;
      }
      &-number {
        color: #AEAEAE;
        font-size: 12px;
        padding-left: 10px;
      }
      @media screen and (max-width: 720px) {
        padding-left: 2%;
        &-hash {
          font-size: 22px;
        }
        &-sub {
          font-size: 11px;
        }
        &-number {
          font-size: 10px;
          padding-left: 6px;
        }
      }
    }
    &-subBtn {}
  }
}

.btnText {
  color: #9A9A9A;
}

.Subcribe-bodyBtn {
  display: flex;
  align-items: center;
  @media screen and (max-width: 720px) {
    img {
      width:29px;
    }
    div {
      font-size: 12.5px;
    }
  }
}
</style>
