<template>
<div class="ViS-Recommended">
  <Video-card class="ViS-Recommended-card" v-for="i in 10" :key="i"></Video-card>
</div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
.ViS-Recommended{
  &-card{
    width:528px;
  }
}
</style>
