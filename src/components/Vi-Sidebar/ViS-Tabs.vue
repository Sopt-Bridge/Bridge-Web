<template>
<div class="ViS-Tabs">
  <v-tabs class="ViS-Tabs-tabs" v-model="active" slider-color="none">
    <div class="ViS-Tabs-border">
      <v-tab class="ViS-Tabs-tab" grow v-for="n in 2" :key="n" @click="activiting(n-1)">
        {{n}}번째 item
      </v-tab>
      <!-- <v-tab-item v-for="n in 2" :key="n">
        <v-card flat>
          <v-card-text>text+{{ n }}</v-card-text>
        </v-card>
      </v-tab-item> -->
    </div>
    <v-tab-item>
      <ViS-Comments></ViS-Comments>
    </v-tab-item>
    <v-tab-item>
      asd
      <ViS-Recommended></ViS-Recommended>
    </v-tab-item>
    
  </v-tabs>
</div>
</template>

<script>
import Comments from './ViS-Comments.vue';
import Recommended from './ViS-Recommended.vue'
export default {
  data() {
    return {
      active: 1
    }
  },
  computed: {
    vTabsItem() {
      return document.getElementsByClassName('v-tabs__item')
    }
  },
  components: {
    'ViS-Comments': Comments,
    'ViS-Recommended':Recommended
  },
  methods: {
    activiting(n) {
      for (let i = 0; i < 2; i++) {
        this.vTabsItem[i].style.backgroundColor = "#f5f5f5";
      }
      this.vTabsItem[n].style.backgroundColor = "#E31C9E";
    }
  }
}
</script>
<style lang='scss' scoped>
@import 'styles/common.scss';
.ViS-Tabs {
  width:1000px;
  &-border {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    height: 100%;
  }
  &-tab {
    width: 100%;
    background-color: #f5f5f5;
  }
}
</style>
