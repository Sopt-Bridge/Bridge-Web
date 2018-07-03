<template>
<div class="text-xs-center req-pagination">
    <v-pagination
      v-model="page"
      :length="3"
    ></v-pagination>
  </div>
</template>

<script>
export default {
    data () {
      return {
        page: 1
      }
    }
}
</script>

<style lang="scss" scoped>
.req-pagination{
    margin-top : 30px;
}

</style>
