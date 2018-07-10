<template>
  <div class="ViS-Comments">
    <div class="ViS-Comments-textField">
      <div class="ViS-Comments-textField-content">
        <v-layout row>
          <input type="text" class="ViS-Comments-textField-content-text">
          <button class="ViS-Comments-textField-content-btn">Comment</button>
        </v-layout>
      </div>
    </div>
    <div class="ViS-Comments-heading">
      <div class="ViS-Comments-heading-text">댓글 4</div>
    </div>
    <!-- <div class="ViS-Comments-items" v-for="item in items" :key="item.idx">
        <ViS-Items :item="item"></ViS-Items>
      </div> -->
    <div class="ViS-Comments-items">
      <!-- <ViS-Items :item="item"></ViS-Items> -->
      <div class="ViS-Comments-items-item">
        <comment></comment>
      </div>
      <div class="ViS-Comments-items-item">
        <comment></comment>
      </div>
      <div class="ViS-Comments-items-item">
        <comment></comment>
      </div>
      <div class="ViS-Comments-items-item">
        <comment></comment>
      </div>
    </div>
  </div>
</template>

<script>
import Items from "./ViS-Items.vue";
import Comment from "../Comment/Comment.vue";
export default {
  data() {
    return {
      items: [
        {
          idx: 1,
          name: "choimango",
          date: "2018.01.01",
          like: 10,
          comment: "댓글입니다.댓글입니다.댓글입니다.댓글입니다.",
          reply: [
            {
              idx: "1-1",
              header: "choimango",
              date: "2018.01.01",
              like: 10,
              comments: "댓글입니다.댓글입니다.댓글입니다.댓글입니다."
            }
          ]
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
    };
  },
  components: {
    "ViS-Items": Items,
    Comment
  }
};
</script>

<style lang='scss' scoped>
@import "styles/common.scss";
.ViS-Comments {
  &-textField {
    display: flex;
    padding: 10px 20px 10px 20px;
    &-content {
      width: 100%;

      &-text {
        width: 95%;
        border: 1px solid $grey-text;
        border-radius: 5px;
      }
      &-btn {
        margin-left: 15px;
        width: 100px;
        height: 40px;
        background-color: $grey-text;
        border-radius: 5px;
        
      }
    }
  }
  &-heading {
    border-top: 1px solid $grey-text;
    border-bottom: 1px solid $grey-text;
  }
  &-items {
    padding-right: 15px;
    &-item {
      border-bottom: 1px solid $grey-text;
    }
  }
}
</style>
