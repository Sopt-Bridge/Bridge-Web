<template>
<div class="myPage-Modal">
  <Modal :popState="dialog" @closing="closing">
    <v-btn @click="opening" slot="activator" flat>
      <span><v-icon>add</v-icon></span>more
    </v-btn>
    <!-- myPage-Modal-card-body -->
    <div class="mmcb" slot="contents">
      <v-layout row wrap>
        <v-flex xs6 sm4 md3 class="mmcb-card" v-for="i in 17" :key="i">
          <div class="mmcb-card-wrapper">
            <div class="mmcb-card-img">
              <img src="http://img.insight.co.kr/static/2018/01/08/700/143hm9u98n3dr49jue61.jpg">
            </div>
            <div class="mmcb-card-text">
              Group
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </Modal>
</div>
</template>
<script>
import Modal from './Modal.vue'

export default {
  data() {
    return {
      dialog: false
    }
  },
  components: {
    'Modal': Modal
  },
  methods:{
    activating(state){
      console.log(state);
      console.log('moreBtn');
      // this.dialog = true;
    },
    opening(){
      this.dialog = true;
    },
    closing(){
      this.dialog = false;
    }
  }
}
</script>
<style lang='scss' scoped>
.mmcb {
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  padding: 25px;
  @media screen and (max-width: 640px) {
    padding:0;
    padding-top: 15px;
  }
  overflow-y: scroll;
  height: 100%;
  background-color: white;
  &-card {
    padding: 3%;
    @media screen and (max-width: 1000px) {
      padding:1%;
    }
    // height: 100%;
    &-wrapper {
      width: 100%;
    }
    &-img {
      position: relative;
      // padding-top: 70%;
      overflow: hidden;
      // height:50%;
      background-color: #E4E4E4;
      img {
        // position: absolute;
        // top: auto;
        // left: 0;
        // right: 0;
        // bottom: auto;
        max-height: auto;
        width: 100%;
        // height:100%;
      }
    }
    &-text {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      padding: 10px;
      padding: 5px;
      background-color: #E4E4E4;
    }
  }
}

.btnText {
  color: #9A9A9A;
}
</style>
