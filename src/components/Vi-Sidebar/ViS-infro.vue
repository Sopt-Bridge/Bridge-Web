<template>
<div class="ViS-Infor">
  <div class="ViS-Infor-container">
    <div class="ViS-Infor-headig">
      K-content
    </div>
    <div class="ViS-Infor-closeBtn">
      <v-icon medium>clear</v-icon>
    </div>
    <div class="ViS-Infor-body">
      희대의 아이돌, 방탄 소년단이 컴백하면서 아이돌팬계의 분위기가 활활 타올랐다.
    </div>
    <div class="ViS-Infor-like">
      <img class="ViS-Infor-likeImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_krABXXht-gOokW3I3i2oECeYLlNNVs3lBVQZ2d2BAXiioZsXA" alt="">
      <div class="ViS-Infor-likeNum">10</div>
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
.ViS-Infor {
  position: relative;
  background-color: #f5f5f5;
  &-container {
    padding-top: 6%;
    padding-left: 7%;
  }
  &-headig {
    font-size: 25px;
  }
  &-closeBtn {
    position: absolute;
    top: 20px;
    right: 10px;
  }
  &-body {
    margin-top: 31px;
    padding-bottom: 30px;
    margin-right:20px;
    // background-color: blue;
    color: #707070;
    font-size: 20px;
  }
  &-like {
    display: flex;
    &Img {
      height: 20px;
    }
    &Num {
      padding-left: 10px;
      color: #707070;
      font-size: 18px;
    }
    padding-bottom:27px;
  }
}
</style>
