<template>
<div class="Contents">
  <v-container grid-list-lg fluid pt-3 pb-1>
    <div class="Contents-head">
      <div class="Contents-head-text">
        {{headTxt}}
      </div>
      <slot class="Contents-head-edit" name="edit"></slot>
      <!-- <img class="Contents-head-img" src="../../assets/img/baseline-play_arrow-24px.svg" alt=""> -->
    </div>
    <v-layout row wrap>
      <slot name="card"></slot>
    </v-layout>
  </v-container>
</div>
</template>
<script>
import videoCard from '../Card/VideoCard.vue'

export default {
  props: ['headTxt', 'cards'],
  components: {
    videoCard
  }
}
</script>
<style lang='scss' scoped>
.Contents {
  // min-width: 900px;
  padding-left: 1%;
  padding-right: 1%;
  &-head {
    font-size: 18px;
    display:flex;
    justify-content: space-between;
    &-text{
      display:flex;
      align-items: center;
    }
  }
}
</style>
