<template>
  <div class="Search" :style="styleObj">
    <div class="Search-section">
      <input class="Search-textBar" v-model="searchItem" @keyup.enter="addSearchItem" type="text" placeholder="#Kpop, #beauty, #BTS 등을 검색해보세요">
      <!-- <div class="Search-menu" :style="styleObj"> -->
      <div class="Search-menu" :height="logHeight+'px'" v-if="propsSearchItems.length > 1">
        <div class="Search-menu-items">
          <div class="Search-menu-item" v-for="(propsSearchItem, index) in propsSearchItems.slice().reverse()" :key="index">
            <!-- <div class="Search-menu-item" v-for="(propsSearchItem, index) in propsSearchItems" :key="index"> -->
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
      <div class="Search-menu-noresult" v-if="propsSearchItems.length <= 1">
        <div class="Search-menu-noresult-text">
          {{ noSearchResult }}
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
  import * as moment from "moment";
  export default {
    props: ["styleObj", "propsSearchItems"],
    data() {
      return {
        searchItem: "",
        noSearchResult: "최근 검색내역이 없습니다."
      };
    },
    computed: {
      logHeight() {
        let len = this.propsSearchItems.lenght;
        if (len < 6) {
          return len * 45
        }
        return 270;
      }
    },
    methods: {
      addSearchItem() {
        if (this.searchItem != "") {
          const now = moment().format("MM.DD");
          let tempSearchItem = this.searchItem;
          const item = {
            date: now,
            searchItem: this.searchItem
          };
          this.$emit("addItem", item);
          this.searchItem = "";
          let searchType = 1;
          if (tempSearchItem[0] == '#') searchType = 0;
          this.$router.push({
            path: 'search',
            query: {
              pageIdx: 0,
              searchname: tempSearchItem,
              searchType: searchType,
              sortType: 0
            }
          })
        }
      }
    }
  };
</script>

<style lang='scss' scoped>
  @import "styles/common.scss";
  .Search {
    &-section {
      position: relative;
    }
    &-textBar {
      border: 1px solid #e4e4e4;
      width: 100%;
      height: 45px;
      padding: 5px 13px 5px 13px;
      &:focus+.Search-menu {
        // background-color: white;
        display: initial;
      }
      &:focus+.Search-menu-noresult {
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
      top: 47px;
      left: 0;
      display: none;
      box-sizing: border-box;
      box-shadow: 0 0 10px 0 gray;
      // height: 45 * 6px;
      overflow-y: scroll;
      &-item {
        padding: 10px;
      }
      &-item {
        height: 45px;
        display: flex;
        &:hover {
          background-color: #dddddd;
        }
        &-text {
          width: 87%;
          font-size: 20px;
          padding-left: 10px;
          @include media("(max-width : 860px)") {
            font-size: 15px;
          }
        }
        &-date {
          font-size: 16px;
          width: 8%;
          color: $grey-text;
          @include media("(max-width : 1130px)") {
            width: 15%;
          }
          @include media("(max-width : 860px)") {
            font-size: 12px;
          }
          @include media("(max-width : 720px)") {
            width: 25%;
          }
          @include media("(max-width : 630px)") {
            width: 40%;
          }
          @include media("(max-width : 510px)") {
            width: 30%;
          }
        }
        &-closeBtn {
          text-align: center;
          width: 5%;
          &-icon {
            color: $grey-text;
            cursor: pointer;
          }
        }
      }
      &-noresult {
        background-color: white;
        width: 100%;
        z-index: 1;
        position: absolute;
        // top: 73px;
        top: 47px;
        left: 0;
        display: none;
        box-sizing: border-box;
        box-shadow: 0 0 10px 0 gray;
        height: 45px;
        overflow-y: scroll;
        &-text {
          margin-top: 10.5px;
          padding-left: 15px;
          color: $grey-text;
          font-size: 15px;
          @extend .Search-menu-item-text;
          @include media("(max-width : 860px)") {
            margin-top: 15px;
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
