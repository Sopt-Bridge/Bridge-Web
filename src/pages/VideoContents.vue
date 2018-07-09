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
    @media screen and (max-width: 1000px) {
      flex-wrap:wrap;
    }
  }
  &-main {
    width: 70%;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  &-sidebar {
    width: 31%;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
}
</style>
