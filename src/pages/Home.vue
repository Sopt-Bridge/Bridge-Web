<template>
<div class="Home">
  <navigation-bar></navigation-bar>
  <router-view></router-view>
</div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
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
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
// @import url('styles/common.scss')
</style>
