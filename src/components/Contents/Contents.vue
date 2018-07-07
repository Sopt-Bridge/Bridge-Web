<template>
<v-container class="Contents" grid-list-lg>
  <v-layout row wrap>
    <v-flex class="Contents-card" v-for="i in 12" :key="i" xs12 sm3>
      <video-card :wrap="true"></video-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import videoCard from '../Card/VideoCard.vue'

export default {
  components: {
    videoCard
  }
}
</script>
<style lang='scss' scoped>

</style>
