<template>
    <div class="comment-all-in-one">
        <div class="req-comment-component">
            <comment :propsShowReply="showReply" @changeData="change"></comment>
        </div>
        <div class="req-comment-reply" v-if="showReply">
            <div class="req-comment-reply-component">
                <reply></reply>
            </div>
            <div class="req-comment-reply-content">
                <div class="req-comment-reply-content-section">
                    <div>
                        <v-icon>subdirectory_arrow_right</v-icon>
                    </div>
                    <div class="req-comment-reply-content-section-inner">
                        <textarea class="req-comment-user-content"></textarea>
                    </div>
                </div>
                <div class="req-comment-reply-btn-section">
                    <button class="req-comment-reply-btn">Reply</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "./Comment";
import Reply from "./Reply";
export default {
  components: {
    Comment,
    Reply
  },
  data(){
      return {
          showReply : false
      }
  },
  methods : {
      change(temp){
          this.showReply = temp;
      }
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
    // width: $remain;
    width : 100%;
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
        // width: $remain;
        width : 100%;
        @include media("(max-width : 620px)") {
          width: 100%;
        }
      }
      &-content {
        display: flex;
        border-bottom : 1px solid $grey-text;
        height : 85px;
        &-section {
          @extend .req-comment-user-content-section;
          width: $remain;
          padding-left: 15px;
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
