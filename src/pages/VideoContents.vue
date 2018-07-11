<template>
<div class="VideoContents">
  <div class="VideoContents-container">
    <Vi-Main class="VideoContents-main"></Vi-Main>
    <Vi-Sidebar class="VideoContents-sidebar"></Vi-Sidebar>
  </div>
</div>
</template>
<script>
export default {
  mounted() {
    // function isMobile() {
    //   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // }
    // let page = document.getElementsByClassName('VideoContents-container')
    // if (isMobile()) {
    //   for (let i = 0; i < page.length; i++) {
    //     // console.log('실행됨')
    //     more[i].style.wrap = 'wrap'
    //   }
    // }
  }
}
</script>
<style lang='scss' scoped>
.VideoContents {
  display: flex;
  justify-content: center;
  &-container {
    display: flex;
    flex-wrap: none;
    margin-top: 15px;
    justify-content: center;
    // margin-left: auto;
    // margin-right: auto;
    max-width: 1280px;
    @media screen and (max-width: 1024px) {
      width:90%;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 769px) {
      width: 100%;
      margin-top: 0;
    }
  }
  &-main {
    width: 70%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
  &-sidebar {
    width: 31%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 769px) {
      width: 90%;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
    }
  }
}
</style>
