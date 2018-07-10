<template>
<div class="hcm">
  <v-checkbox hide-details class="hcm-check" label="구록루" v-for="i in 4" :key="i" value="i" color="pink lighten-2"></v-checkbox>
  <div class="hcm-input">
    <button class="hcm-input-btn"><v-icon class="hcm-input-btnIcon">add</v-icon></button>
    <input class="hcm-input-text" type="text" placeholder="Folder name">
  </div>
  <button type="submit" class="cardMore_color">Add to Library</button>
</div>
</template>
<script>
export default {
  date() {
    return {
      vel: 1
    }
  }
}
</script>
<style lang='scss' scoped>
.hcm {
  background-color: white;
  padding: 4%;
  &-check {
    // font-size:px;
    // margin: 1px;
    padding: 0;
    margin-top: 10px;
    &:nth-child(1) {
      margin-top: 0;
    }
  }
  &-input {
    // background-color: red;
    display:flex;
    margin-top:10px;
    margin-left:3.2px;
    &-btn {
      // background-color: #E31C9E;
      // border-radius: 3px;
      &Icon {
        color:white;
        background-color: #E31C9E;
        border-radius: 3px;
        height: 19px;
        width: 18px;
      }
    }
    &-text{
      font-size:11px;
      box-sizing: border-box;
      margin-left: 11px;
      border:1.5px solid #C3C3C3;
      border-radius: 2px;
    }
  }
}

.cardMore_color {
  margin-top:20px;
  width:200px;
  height:40px;
  font-size:15px;
  color: white;
  background-color: #E31C9E;
}
</style>
