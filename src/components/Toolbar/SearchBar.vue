<template>
<div class="Search" :style="styleObj">
  <div class="Search-section">
    <input class="Search-textBar" v-model="searchItem" @keyup.enter="addSearchItem" type="text" placeholder="#Kpop, #beauty, #BTS 등을 검색해보세요">
    <!-- <div class="Search-menu" :style="styleObj"> -->
      <div class="Search-menu">
      <div class="Search-menu-items">
        <div class="Search-menu-item" v-for="(propsSearchItem, index) in propsSearchItems.slice().reverse()" :key="index">
          <div class="Search-menu-item-text">
            {{ propsSearchItem.searchItem }}
          </div>
          <div class="Search-menu-item-date">{{ propsSearchItem.date }}</div>
          <div class="Search-menu-item-closeBtn">
            <v-icon small class="Search-menu-item-closeBtn-icon">clear</v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import * as moment from 'moment';
export default {
  data() {
    return {
      searchItem : "",
      
    }
  },
  methods :{
    addSearchItem(){
      if(this.searchItem != ""){
        const now = moment().format('MM.DD');
        const item = {
          date : now,
          searchItem : this.searchItem
        }
        this.$emit("addItem", item);
        this.searchItem = "";
      }
    }
  },
  props: ['styleObj', 'propsSearchItems']
}
</script>
<style lang='scss' scoped>
@import 'styles/common.scss';
.Search {
  &-section{
    position: relative;
  }
  &-textBar {
    border: 1px solid #E4E4E4;
    width: 100%;
    height: 45px;
    padding : 5px 13px 5px 13px;
    &:focus+.Search-menu {
      // background-color: white;
      display: initial;
    }
    @media screen and (max-width: 860px) {
      font-size: 12px;
    }
    // @media screen and (max-width: 570px) {
    //   display:none;
    // }
  }
  &-menu {
    background-color: white;
    width: 100%;
    z-index: 1;
    position: absolute;
    // top: 73px;
    top : 47px;
    left: 0;
    display: none;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 gray;
    height: 45 * 6px;
    overflow-y: scroll;
    &-item {
      padding: 10px;
    }
    &-item {
      height: 45px;
      display: flex;
      &:hover {
        background-color: #DDDDDD;
      }
      &-text {
        width: 87%;
        font-size: 20px;
        padding-left : 10px;
      }
      &-date {
        font-size: 16px;
        width : 8%;
        color : $grey-text;
      }
      &-closeBtn{
        text-align: center;
        width : 5%;
        &-icon{
          color : $grey-text;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
