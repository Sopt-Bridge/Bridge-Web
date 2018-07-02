<template>
<div class="Login">
  <div class="Login-topLine"></div>
  <v-toolbar dark>
    <v-toolbar-title style="width: 42px">
      <img src="@/assets/img/short logo.svg" class="main_logo">
    </v-toolbar-title>
  </v-toolbar>
  <v-content>
    <Rand></Rand>
    <Rand-test></Rand-test>
  </v-content>
</div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import "styles/common.scss";
.Login {
  &-topLine {
    height: 6px;
    width: 100%;
    background-color: $main-color;
  }
}
</style>

