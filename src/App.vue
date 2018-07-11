<template>
<v-app>
  <toolbar id="App-toolbar"></toolbar>
  <v-content>
    <router-view class="App-content"></router-view>
  </v-content>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>

<style lang="scss">
// @import url('styles/common.scss')
@import 'styles/common.scss';
.v-app {
  min-width: 320px;
}
#App-toolbar{
  z-index:6;
}
.App {
  &-content {
    margin-top: 65px;
    @media screen and (max-width: 510px) {
      margin-top: 109px;
    }
  }
}

.swiper-pagination-bullet-active {
  background-color: #ffffff;
}

</style>
