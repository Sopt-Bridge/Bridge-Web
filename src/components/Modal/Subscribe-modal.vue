<template>
<div class="Sub-Modal">
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <v-btn class="btnText" slot="activator" flat>
        <span><v-icon>add</v-icon></span>more        
        <!-- + MORE -->
      </v-btn>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <div class="sm-heading">
            <div class="leftBox">
              Total <span>58</span>
            </div>
            <div class="rightBox" @click="dialog = false">
              <v-icon medium>clear</v-icon>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md fluid>
            <v-layout row wrap>
              <v-flex class="Libaray-body-card" xs3 v-for="i in 16" :key="i">
                <v-card class="Libaray-Vcard">
                  <v-card-media src="http://img.sbs.co.kr/newimg/news/20170622/201061239_1280.jpg" height="110px"></v-card-media>
                  <v-card-title class="card-title-text">Group{{i}}</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
<style lang='scss' scoped>
.sm {
  &-heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.rightBox{
  cursor: pointer;
}

.btnText{
  color:#9A9A9A;
}
</style>
