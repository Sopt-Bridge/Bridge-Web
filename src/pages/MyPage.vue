<template>
<div class="MyPage">
  <Navdrawer></Navdrawer>
  <div class="MyPage-wrap">
    <div class="MyPage-head">
      <Library></Library>
    </div>
    <div class="MyPage-body">
      <Contents class="MyPage-body-contents" :headTxt="headTxt">
        <div slot="edit">
          <edit></edit>
        </div>
        <v-flex v-for="i in cards" :key="i" xs12 slot="card">
          <video-card class="MyPage-body-card" :wrap="false">
            <v-card slot="more">
              <v-card-title>
                Remove from this folder
              </v-card-title>
            </v-card>
            <!-- <v-btn slot="more">Remove from this folder</v-btn> -->
          </video-card>
        </v-flex>
      </Contents>
    </div>
  </div>
</div>
</template>

<script>
import Libaray from '../components/Library.vue'
import edit from '../components/EditBtn.vue'
export default {
  data() {
    return {
      headTxt: 'Group1',
      cards: 8
    }
  },
  components: {
    'Library': Libaray,
    edit
  }

}
</script>
<style lang='scss' scoped>
.MyPage {
  &-wrap{
    max-width: 1024px;
    margin:0 auto;
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
    }
  }
  &-inMenu {
    left: -4.6px;
    top: -57.2px;
  }
}
</style>
