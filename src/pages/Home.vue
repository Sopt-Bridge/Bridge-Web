<template>
<div class="home">
  <navdrawer></navdrawer>
  <div class="home-components"> 
    <main-poster></main-poster>
    <trending></trending>
    <recommended></recommended>
    <recently></recently>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },


}
</script>

<style lang="scss" scoped>
@import 'styles/common.scss';
.home-components{
  max-width: 1377px;
  margin-left : auto;
  margin-right : auto;
}
</style>
