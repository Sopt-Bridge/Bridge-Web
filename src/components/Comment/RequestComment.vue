<template>
  <div class="req-comment">
    <v-container>
      <v-layout>
        <div class="req-comment-count-section">
          <p class="req-comment-title">Comments</p>
          <!-- ***AXIOS*** -->
          <!-- <p class="req-comment-count">4</p> -->
          <p class="req-comment-count">{{getCommentResult.length}}</p>
        </div>
      </v-layout>
      <v-layout>
        <v-flex xs12 sm12 md12 lg12 class="req-comment-user-content-section">
          <div class="req-comment-user-content-inner-section">
            <!-- <textarea class="req-comment-user-content" :placeholder="comment"></textarea> -->
            <textarea class="req-comment-user-content" v-model="commentContent" @keyup.enter="commentWriteFunc"></textarea>
          </div>
          <div class="req-comment-btn-section">
            <button class="req-comment-btn" @click="commentWriteFunc">Comment</button>
          </div>
        </v-flex>
      </v-layout>
      <div v-for="(item,index) in getCommentResult" :key="index">
        <comment-all-in-one :commentElement="item"></comment-all-in-one>
      </div>
    </v-container>
  </div>
</template>

<script>
  import axios from "axios";
  const api = "http://13.124.201.59";
  import {
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  import Comment from "./Comment";
  import Reply from "./Reply";
  import CommentAllInOne from "./CommentAllInOne";
  export default {
    data() {
      return {
        comment: "Please input comment...",
        reply: "Please input reply...",
        commentContent: "",
        commentCount : 0
      }
    },
    methods: {
      ...mapActions(["setCommentResult"]),
      commentWriteFunc() {
        if (this.commentContent != "") {
          console.log(this.$route.query.iboardIdx);
          let data = {
            userIdx: 1,
            icmtContent: this.commentContent,
            iboardIdx: this.$route.query.iboardIdx
          }
          axios.post(api + '/trequest/trequestcomment_write', data).then(res => {
            console.log(res);
          });
          alert("Write comment success!")
          location.reload()
        }
      }
    },
    computed: {
      ...mapGetters(['getCommentResult'])
    },
    components: {
      Comment,
      Reply,
      CommentAllInOne
    },
    props: ['requestIdx'],
    created() {
      this.setCommentResult(this.requestIdx);
    }
  };
</script>

<style lang='scss' scoped>
  @import "styles/common.scss";
  $remain: 0px;
  p {
    display: inline;
    font-size: 15px;
  }
  
  .req-comment {
    &-count {
      padding-left: $inner-padding;
      &-section {
        margin-left: 20px;
      }
    }
    &-user {
      &-container {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      &-content {
        width: 100%;
        height: 100%;
        &-section {
          display: flex;
          margin-top: 19px;
          height: $comment-height;
          @include media("(max-width : 620px)") {
            height: 60px;
          }
        }
        &-inner-section {
          $remain: calc(99% - 95px) !global;
          width: $remain;
          margin-right: 1%;
          height: 100%;
          border: 1px solid $grey-text;
          border-radius: 5px;
          padding: 10px 10px 10px 10px;
        }
      }
      &-comment {
        &-detail {
          height: 100%;
        }
      }
      &-info {
        width: 100%;
        height: 70px;
        display: block;
        &-detail {
          display: flex;
          align-items: flex-end;
        }
        &-nickname {
          width: 100%;
          height: 60%;
        }
        &-btn {
          font-size: 13px;
          cursor: pointer;
          &-reply {
            margin-left: 26px;
            @include media("(max-width : 620px)") {
              margin-left: 8px;
            }
          }
        }
        &-date {
          font-size: 13px;
          color: $grey-text;
          &-section {
            width: 100%;
            height: 30%;
          }
        }
      }
    }
    &-component {
      width: $remain;
      border-bottom: 1px solid $grey-text;
      @include media("(max-width : 620px)") {
        width: 100%;
      }
    }
    &-btn {
      height: $button-width-height;
      width: $button-width-height;
      background-color: $grey-text;
      border-radius: 5px;
      @include media("(max-width : 620px)") {
        height: 60px;
      }
    }
    /*under 620px font-size of comment*/
    @include media("(max-width : 620px)") {
      &-title {
        font-size: 12.5px;
      }
      &-count {
        font-size: 12.5px;
      }
      &-user-info {
        &-btn {
          font-size: 10px;
        }
        &-date {
          font-size: 10px;
        }
        &-nickname {
          &-text {
            font-size: 12.5px;
          }
        }
      }
      &-user-comment {
        &-detail {
          &-text {
            font-size: 12.5px;
          }
        }
      }
    }
  }
  
  .req {
    &-comment {
      &-reply {
        &-component {
          width: $remain;
          @include media("(max-width : 620px)") {
            width: 100%;
          }
        }
        &-content {
          display: flex;
          &-section {
            @extend .req-comment-user-content-section;
            width: $remain;
            padding-left: 45px;
            height: 45px;
            margin-right: 1%;
            @include media("(max-width : 620px)") {
              padding-left: 0px;
            }
            &-inner {
              @extend .req-comment-user-content-inner-section;
              width: 100%;
              margin-right: 0%;
            }
          }
        }
        &-section {
          width: $remain;
          border-bottom: 1px solid $grey-text;
          padding-left: 45px;
          display: flex;
          @include media("(max-width : 620px)") {
            width: 100%;
            padding-left: 0px;
          }
        }
        &-btn {
          @extend .req-comment-btn;
          height: 45px;
          margin-top: 19px;
        }
      }
    }
  }
</style>

