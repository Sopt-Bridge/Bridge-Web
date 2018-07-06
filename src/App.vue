<template>
<v-app>
  <toolbar></toolbar>
  <v-content>
    <router-view></router-view>
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
  name: 'App',

}
</script>

<style lang="scss">
// @import url('styles/common.scss')
.v-app{
  min-width:320px;
}
</style>
