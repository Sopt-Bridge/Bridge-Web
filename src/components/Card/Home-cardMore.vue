<template>
<v-card>
  <v-checkbox label="1" value="1"></v-checkbox>
  <v-checkbox label="2" value="2"></v-checkbox>
  <v-checkbox label="3" value="3"></v-checkbox>
  <v-checkbox label="4" value="4"></v-checkbox>
  <v-btn>
    <v-icon>add</v-icon>
  </v-btn>
  <v-text-field name="folderName" label="folderName"></v-text-field>
  <v-btn color="pink lighten-1" dark>Add to Library</v-btn>
</v-card>
</template>
<script>
export default {
  date() {
    return {
      vel: 1
    }
  }
}
</script>
<style lang='scss' scoped>
.cardMore_color {
  background-color: #E31C9E;
}
</style>
