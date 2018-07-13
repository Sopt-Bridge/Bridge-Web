<template>
<div class="ViM-Infor">
  <div class="ViM-Infor-heading">
    <div class="ViM-Infor-heading-text" v-text="getContents.contentsTitle">
    </div>
    <div class="ViM-Infor-heading-more">
      <v-menu :close-on-content-click="false">
        <v-icon slot="activator">more_vert</v-icon>
        <more></more>
      </v-menu>
    </div>
  </div>
  <div class="ViM-Infor-tag">{{getContents.hashName1}} {{getContents.hashName2}} {{getContents.hashName3}}
  </div>
  <!-- <div class="ViM-Infor-time">3 min age</div> -->
  <!-- <div class="ViM-Infor-src">BTS Official Homepage https:/bts.isjndk_vkaocorp.com</div> -->
</div>
</template>
<script>
import more from '../Card/Home-cardMore.vue'
import {
  mapGetters,mapActions
} from 'vuex';
export default {
  components: {
    more
  },
  computed: {
    ...mapGetters(['getContents']),
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions(['asyncSetContents']),
    fetchData() {
      console.log('라우트 변경이 감지됨');
      let data = {
        contentsIdx: this.$route.params.contentsIdx,
        contentsType: this.$route.params.contentsType
      }
      this.asyncSetContents(data);
    }
  },
}
</script>
<style lang='scss' scoped>
@mixin resSize($size) {
  @media screen and (max-width: 780px) {
    font-size:$size - 2px;
  }
  @media screen and (max-width:480px) {
    font-size: $size - 4px;
  }
  @media screen and (max-width:360px) {
    font-size: $size - 5px;
  }
}

.ViM-Infor {
  padding-left: 2%;
  &-heading {
    position: relative;
    &-text {
      // background-color: red;
      padding-top: 2%;
      padding-bottom: 1%;
      padding-right: 4.5%;
      font-size: 22px;
      font-weight: bold;
      @include resSize(22px);
    }
    &-more {
      position: absolute;
      top: 22%;
      right: 0.8%;
    }
  }
  &-tag {
    padding-top: 1%;
    padding-bottom: 1%;
    color: violet;
    font-size: 20px;
    @include resSize(20px);
  }
  &-time {
    color: #acacac;
    font-size: 22px;
  }
  &-src {
    color: #acacac;
    font-size: 17px;
    @include resSize(17px);
  }
}
</style>
