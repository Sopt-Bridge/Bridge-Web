<template>

<div class="Home">
  <navdrawer></navdrawer>
  <div class="home-components">
    <main-poster></main-poster>
    <!-- <trending></trending>
    <recommended></recommended>
    <recently></recently> -->
    <contents></contents>
  </div>
</div>
</template>

<script>
import contents from '../components/Contents/Contents.vue'

export default {
  data() {
    return {

    }
  },
  components:{
    contents
  }


}
</script>

<style lang="scss" scoped>
@import 'styles/common.scss';
.home-components{
  max-width: 1378px;
  margin-left : auto;
  margin-right : auto;
}
</style>
