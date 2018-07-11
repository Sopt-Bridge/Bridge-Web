<template>
<div class="Vi-Sidebar" :style="{height:barHeight}">
  <!-- <div class="Vi-Sidebar"> -->
  <ViS-Infor></ViS-Infor>
  <ViS-Tabs></ViS-Tabs>
</div>
</template>
<script>
import Infor from './ViS-Infro.vue';
import Tabs from './ViS-Tabs.vue';

export default {
  data(){
    return{
      width:null
    }
  },
  computed: {
    screenWidth() {
    },
    barHeight() {
      // if (this.screenWidth < 1000) {
      //   console.log('1000px 좁다');
      //   // return '100%'
      //   return window.screen.availHeight - 156 + 'px';
      // } else {
      //   console.log('1000px 넓다');
      // }
        return window.screen.availHeight - 156 + 'px';
    }
  },
  components: {
    'ViS-Infor': Infor,
    'ViS-Tabs': Tabs
  }
}
</script>
<style lang='scss' scoped>
.Vi-Sidebar {
  // background-color: blue;
  overflow-y: scroll;
  @media screen and (max-width: 1024px) {
    overflow: visible;
  }
}
</style>
