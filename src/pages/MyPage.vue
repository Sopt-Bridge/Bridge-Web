<template>
<div class="MyPage">
  <Navdrawer :items="navItem" :position="position" @navBtnState="navBtnClick"></Navdrawer>
  <div class="MyPage-wrap">
    <div class="MyPage-head">
      <Library></Library>
    </div>
    <div class="MyPage-body">
      
      <Contents class="MyPage-body-contents" :headTxt="headTxt">
        <div slot="edit">
          <edit></edit>
        </div>
        <v-flex v-for="(item,index) in getMyRecentVideo" :key="index" xs12 slot="card">
          <video-card class="MyPage-body-card" :nowrap="true" :item="item">
            <v-card slot="more">
              <v-card-title>
                Remove from this folder
              </v-card-title>
            </v-card>
          </video-card>
        </v-flex>
      </Contents>
    </div>
  </div>
</div>
</template>
            <!-- <v-btn slot="more">Remove from this folder</v-btn> -->

<script>
import Libaray from '../components/Library.vue'
import edit from '../components/EditBtn.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
  data() {
    return {
      position: 'MyPageNav',
      headTxt: 'Group1',
      cards: 8,
      btnState: 0,
      userIdx:0,
      navItem: [{
          title: "Recent Videos"
        },
        {
          title: "Library Folder",
        }
      ],
      userIdx : 1//더미 유저 인덱스
    }
  },
  computed:{
    ...mapGetters(['getGroupList','getMyRecentVideo'])
  },
  components: {
    'Library': Libaray,
    edit
  },
  methods: {
    navBtnClick(index) {
      this.navState = index;
      // console.log('navBtn' + index);
    },
    ...mapActions(['setGroupList','setMyRecnetVideo'])
  },
  mounted(){
    this.setGroupList(this.userIdx);
    this.setMyRecnetVideo(this.userIdx);
  }

}
</script>
<style lang='scss' scoped>
.MyPage {
  &-wrap {
    max-width: 1024px;
    margin: 0 auto;
  }
  &-head {
    margin: 0 auto;
    margin-top: 100px;
    // max-width: 1000px;
    width: 100%;
    @media screen and (max-width: 800px) {
      overflow-x: scroll;
    }
  }
  &-body {
    display: flex;
    justify-content: center;
    &-card {
      max-height: 324px;
    }
    &-contents {
      max-width: 1024px;
      // width:100%;
    }
  }
  &-inMenu {
    left: -4.6px;
    top: -57.2px;
  }
}
</style>
