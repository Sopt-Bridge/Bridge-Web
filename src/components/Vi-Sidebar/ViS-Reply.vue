<template>
<div class="ViS-Reply">
  <ViS-Items>
    <div class="ViS-Reply-arrow">
      ->
      <!-- <img src="@/assets/img/baseline-subdirectory_arrow_right-24px.png" alt=""> -->
    </div>
  </ViS-Items>
</div>
</template>
<script>
import VisItems from './ViS-Items.vue'
export default {
  props:['Ritem'],
  components:{
    'ViS-Items':VisItems
  }
}
</script>
<style lang='scss' scoped>

</style>
