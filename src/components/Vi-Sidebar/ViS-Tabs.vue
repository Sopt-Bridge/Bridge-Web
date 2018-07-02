<template>
<div class="ViS-Tabs">
  <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
    <!-- <ViS-Comments></ViS-Comments> -->
    <v-tab v-for="n in 3" :key="n">
      Item {{n}}
    </v-tab>
    <v-tab-item v-for="n in 3" :key="n">
      <v-card flat>
        <v-card-text>text+{{ n }}</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</div>
</template>

<script>
import Comments from './ViS-Comments.vue';

export default {
  components: {
    'ViS-Comments': Comments
  }
}
</script>
<style lang='scss' scoped>
.ViS-Tabs {
  // background-color: blue;
  // height:200px;
}
</style>
