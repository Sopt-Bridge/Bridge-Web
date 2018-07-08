<template>
<div class="nav-drawer">
    <v-navigation-drawer @click="drawer = !drawer" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app class="navbar-drawer" hide-overlay>
        <div class="navbar-drawer-icon-clear" @click="drawer = !drawer">
            <v-icon medium>clear</v-icon>
        </div>
        <div class="navbar-drawer-components">
            <ul class="navbar-drawer-components-lists">
                <li class="navbar-drawer-components-lists-item" v-for="(item, i) in items" :key="i">
                        <a @click="changeColor(i)"><p :id="i" class="navbar-drawer-components-lists-item-title">{{ item.title }}</p></a>
                </li>
            </ul>
        </div>
    </v-navigation-drawer>
    <div class="navbar-drawer-icon-more" v-if="!drawer" @click="drawer = !drawer">
        <img :src="more" class="navbar-drawer-icon-more-img">
    </div>
</div>
</template>

<script>
import more_icon from '../../assets/img/hamburger_open_btn.svg'
export default {
    data() {
        return {
            items: [
                {
                    title: "HOT"
                },
                {
                    title: "K-content"
                },
                {
                    title: "K-pop"
                },
                {
                    title: "Fun"
                },
                {
                    title: "Culture"
                }

            ],
            fixed: true,
            drawer: false,
            clipped: true,
            more : more_icon
    };
  },
  methods: {
    drawing() {
      return !this.drawer;
    },
    changeColor(num){
        let i = 0;
        for(i; i<5; i++){
            document.getElementById(i).style.color = "#333333";    
        }
        document.getElementById(num).style.color = "#E31c9e";
        if(window.screen.availWidth < 510){
            this.drawer = false;
        }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
$navigation-top : 64px;

.navbar-drawer {
  z-index: 2;
  top : $navigation-top;
  @include media("(max-width: 510px)"){
      top : $navigation-top + 40px;
      
  }
  &-components{
      margin-top : 80px;
      margin-left : 40px;
      &-lists{
          list-style: none;
          padding-left : 0px;
          &-item{
              height: 70px;
              &-title{
                  font-size: 27px;
                  color: #333333;
              }
              
          }
      }
  }
  &-icon{
      &-clear{
          position : absolute;
          margin-left : 260px;
          margin-top : 10px;
          cursor: pointer;
      }
      &-more{
        position: fixed;
        cursor: pointer;
        margin-left : -13px;
        margin-top : 100px;
        z-index: 2;
        &-img{
            width : 50px;
            height : 50px;
            
        }
      }
  }
}

ul li:nth-child(1) p{
    color : $main-color;
}



</style>
