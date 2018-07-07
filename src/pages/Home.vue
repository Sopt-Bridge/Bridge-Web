<template>
<div class="Home">
  <!-- <navdrawer></navdrawer> -->
  <main-poster></main-poster>
  <!-- <trending></trending>
  <recommended></recommended>
  <recently></recently> -->
  <contents></contents>
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

</style>
