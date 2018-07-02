<template>
<div class="Home">
  <navdrawer></navdrawer>
</div>
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
</style>
