<template>
<div class="ViS-Comments">
  <div class="ViS-Comments-textField">
    <v-text-field></v-text-field>
    <v-btn></v-btn>
  </div>
  <div class="ViS-Comments-heading">
    <div class="ViS-Comments-heading-text">댓글 4</div>
  </div>
  <div class="ViS-Comments-items" v-for="item in items" :key="item.idx">
    <ViS-Items :item="item"></ViS-Items>
  </div>
</div>
</template>

<script>
import Items from './ViS-Items.vue'

export default {

  data() {
    return {
      items: [{
          idx: 1,
          name: "choimango",
          date: "2018.01.01",
          like: 10,
          comment: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: [{
            idx: '1-1',
            header: "choimango",
            date: "2018.01.01",
            like: 10,
            comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          }]
        },
        {
          idx: 2,
          name: "choimango",
          date: "2018.01.01",
          like: 10,
          comment: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: {}
        },
        {
          idx: 3,
          name: "choimango",
          date: "2018.01.01",
          like: 10,
          comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: {}
        },
        {
          idx: 4,
          name: "choimango",
          date: "2018.01.01",
          like: 10,
          comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: {}
        },
        {
          idx: 5,
          name: "choimango",
          date: "2018.01.01",
          like: 10,
          comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: {}
        }
      ]
    }
  },
  components: {
    'ViS-Items': Items
  }

}
</script>
<style lang='scss' scoped>
.ViS-Comments {
}
</style>
