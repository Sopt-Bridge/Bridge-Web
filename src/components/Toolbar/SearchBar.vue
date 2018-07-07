<template>
<div class="Search" :style="styleObj">
  <input class="Search-textBar" type="text" placeholder="#Kpop, #beauty, #BTS 등을 검색해보세요">
  <div class="Search-menu" :style="styleObj">
    <div class="Search-menu-items">
      <div class="Search-menu-item" v-for="i in 15" :key="i">
        <div class="Search-menu-item-text">
          {{i}}번쨰 리스트
        </div>
        <div class="Search-menu-item-date">05.24</div>
        <div class="Search-menu-item-closeBtn">X</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ['styleObj']
}
</script>
<style lang='scss' scoped>
.Search {
  &-textBar {
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    width: 100%;
    height: 45px;
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
    top: 73px;
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
        width: 90%;
        font-size: 20px;
      }
      &-date {
        font-size: 16px;
      }
    }
  }
}
</style>
