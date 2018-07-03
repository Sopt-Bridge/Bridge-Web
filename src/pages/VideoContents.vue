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
  display:flex;
  justify-content: center;
  &-container {
    margin-top: 30px;
    display: flex;
    flex-wrap:wrap;
    &-sidebar{
      float: left;
      // background-color: red;
      // width:1000px;
    }
  }
}

</style>
