<template>
<div class="ViS-Comments">
  <v-tab ripple>
    Comments
  </v-tab>
  <v-tab-item>
    <div class="ViS-Comments">
      <v-text-field></v-text-field>
      <v-btn></v-btn>
    </div>
    <div class="ViS-Comments-heading"></div>   
</div>
</template>
<script>
export default {
  data() {
    return {
      item: [{
          idx: 1,
          header: "choimango",
          date: "2018.01.01",
          like: 10,
          comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: [{
            idx: 1 - 1,
            header: "choimango",
            date: "2018.01.01",
            like: 10,
            comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          }]
        },
        {
          idx: 2,
          header: "choimango",
          date: "2018.01.01",
          like: 10,
          comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: false
        },
        {
          idx: 3,
          header: "choimango",
          date: "2018.01.01",
          like: 10,
          comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: false
        }
      ]
    }
  }

}
</script>
<style lang='scss' scoped>

</style>
