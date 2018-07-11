<template>
<div class="Library">
  <div class="Library-heading">
    <div class="Library-headingMore">
      <mypage-modal></mypage-modal>
    </div>
    <div class="Library-headingCreate">
      <v-menu offset-overflow left :close-on-content-click="false">
        <v-btn flat slot="activator">Create</v-btn>
        <v-card>
          <form class="menu-form">
            <input type="text" placeholder="Folder name">
            <div class="btnGroup">
              <div class="menu-btn Cancle">
                <div>
                  Cancle
                </div>
              </div>
              <div class="menu-btn Rename">
                <div>
                  Rename
                </div>
              </div>
            </div>
          </form>
        </v-card>
      </v-menu>
    </div>
  </div>
  <div class="Library-body">
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex class="Libaray-body-card" xs3 v-for="i in 4" :key="i">
          <v-card class="Libaray-Vcard">
            <v-card-media :src="img" height="110px"></v-card-media>
            <v-card-title class="card-title-text">Group{{i}}</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</div>
</template>
<script>
import bg from '../assets/img/bp.png';
import modal from '../components/Modal/MyPage-modal.vue'
export default {
  data() {
    return {
      img: bg
    }
  },
  components:{
    'mypage-modal':modal
  }

}
</script>
<style lang='scss' scoped>
.Library {
  width: 100%;
  &-heading {
    display: flex;
    justify-content: space-between;
  }

}


.card-title-text {
  font: 18px bold;
  // font-size:18px;
  justify-content: center;
}

.menu {
  &-form {
    width: 250px;
    text-align: center;
    padding: 20px;
    input {
      width: 100%;
      border: 2px solid #C3C3C3;
    }
    .Cancle {
      color: white;
      background-color: #C3C3C3;
      margin-right: 5px;
    }
    .Rename {
      color: white;
      background-color: #E31C9E;
      margin-left: 5px;
    }
    .btnGroup {
      margin-top: 13px;
      display: flex;
    }
  }
  &-btn {
    flex-grow: 1;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
