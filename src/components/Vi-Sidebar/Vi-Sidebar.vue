<template>
<div class="Vi-Sidebar">
  <ViS-Infor></ViS-Infor>
  <ViS-Tabs></ViS-Tabs>
</div>
</template>
<script>
import Infor from './ViS-Infro.vue';
import Tabs from './ViS-Tabs.vue';

export default {
  components:{
    'ViS-Infor':Infor,
    'ViS-Tabs':Tabs
  }
}
</script>
<style lang='scss' scoped>

</style>
