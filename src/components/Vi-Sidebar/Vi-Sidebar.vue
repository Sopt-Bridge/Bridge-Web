<template>
<div class="Vi-Sidebar" :style="{height:barHeight+'px'}">
  <ViS-Infor></ViS-Infor>
  <ViS-Tabs></ViS-Tabs>
</div>
</template>
<script>
import Infor from './ViS-Infro.vue';
import Tabs from './ViS-Tabs.vue';

export default {
  computed:{
    barHeight(){
      let height = window.screen.availHeight-90;
      return height;
    }
  },
  components:{
    'ViS-Infor':Infor,
    'ViS-Tabs':Tabs
  }
}
</script>
<style lang='scss' scoped>
.Vi-Sidebar{
  background-color: blue;
  min-width:530px;
  width:100%;
  // overflow-x:hidden;
  overflow-y: scroll;
}
</style>
