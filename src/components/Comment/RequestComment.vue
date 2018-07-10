<template>
    <div class="req-comment">
        <v-container>
            <v-layout>
                <div class="req-comment-count-section">
                    <p class="req-comment-title">Comments</p>
                    <!-- ***AXIOS*** -->
                    <p class="req-comment-count">4</p>
                </div>
            </v-layout>
            <v-layout>
                <v-flex xs12 sm12 md12 lg12 class="req-comment-user-content-section">
                    <div class="req-comment-user-content-inner-section">
                        <!-- <textarea class="req-comment-user-content" :placeholder="comment"></textarea> -->
                        <textarea class="req-comment-user-content"></textarea>
                    </div>
                    <div class="req-comment-btn-section">
                        <button class="req-comment-btn">Comment</button>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout>
                <!-- ***AXIOS*** -->
                <div class="req-comment-section">
                    <div class="req-comment-user-icon">
                        <v-icon class="req-comment-icon-person">person</v-icon>
                    </div>
                    <div class="req-comment-user-container">
                        <div class="req-comment-user-info">
                            <div class="req-comment-user-info-nickname req-comment-user-info-detail">
                                
                                <div>
                                    <!--***AXIOS**-->
                                    <p class="req-comment-user-info-nickname-text">SML</p>
                                </div>
                                <v-spacer/>
                                <div>
                                    <!--***AXIOS**-->
                                    <p class="req-comment-user-info-btn">DELETE</p>
                                    <p class="req-comment-user-info-btn req-comment-user-info-btn-reply">REPLY</p>
                                </div>
                            </div>
                            <div class="req-comment-user-info-date-section req-comment-user-info-detail">
                                <div>
                                    <!--***AXIOS**-->
                                    <p class="req-comment-user-info-date">01/01/2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="req-comment-user-comment-detail">
                            <!--***AXIOS**-->
                            <p class="req-comment-user-comment-detail-text">Hello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahaha</p>
                            <!-- <div class="req-comment-user-comment-detail-space"></div> -->
                        </div>
                    </div>
                </div>
            </v-layout>
            <v-layout>
                <!-- ***AXIOS*** -->
                <div class="req-comment-reply-section">
                    <div class="req-comment-reply-icon">
                        <v-icon>subdirectory_arrow_right</v-icon>
                    </div>
                    <div class="req-comment-user-icon">
                        <v-icon class="req-comment-icon-person">person</v-icon>
                    </div>
                    <div class="req-comment-user-container">
                        <div class="req-comment-user-info">
                            <div class="req-comment-user-info-nickname req-comment-user-info-detail">
                                <div>
                                    <!--***AXIOS**-->
                                    <p class="req-comment-user-info-nickname-text">KYG</p>
                                </div>
                                <v-spacer/>
                                <div>
                                    <!--***AXIOS**-->
                                    <p class="req-comment-user-info-btn">DELETE</p>
                                    <p class="req-comment-user-info-btn req-comment-user-info-btn-reply">REPLY</p>
                                </div>
                            </div>
                            <div class="req-comment-user-info-date-section req-comment-user-info-detail">
                                <div>
                                    <!--***AXIOS**-->
                                    <p class="req-comment-user-info-date">01/01/2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="req-comment-user-comment-detail">
                            <!--***AXIOS**-->
                            <p class="req-comment-user-comment-detail-text">ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahaha</p>
                        </div>
                    </div>
                </div>
            </v-layout>
            <v-layout>
                    <div class="req-comment-reply-content-section">
                        <div>
                            <v-icon>subdirectory_arrow_right</v-icon>
                        </div>
                        <div class="req-comment-reply-content-section-inner">
                            <!-- <textarea class="req-comment-user-content" :placeholder="reply"></textarea> -->
                            <textarea class="req-comment-user-content"></textarea>
                        </div>
                    </div>
                    <div class="req-comment-reply-btn-section">
                        <button class="req-comment-reply-btn">Reply</button>
                    </div>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
// import Reply from './Reply'
export default {
  data() {
    return {
      comment: "Please input comment...",
      reply: "Please input reply..."
    };
  }
};
</script>
<style lang='scss' scoped>
@import "styles/common.scss";
$button-width-height: 95px;
$remain: 0px;
$comment-height: 97px;
$reply-height: 45px;

p {
  display: inline;
  font-size: 15px;
}
.req-comment {
  &-icon {
    &-person {
      width: 70px;
      height: 70px;
      font-size: 45px;
    }
  }
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
  &-btn {
    height: $button-width-height;
    width: $button-width-height;
    background-color: $grey-text;
    border-radius: 5px;
    @include media("(max-width : 620px)") {
      height: 60px;
    }
  }
  &-section {
    width: $remain;
    min-height: $comment-height;
    border-bottom: 1px solid $grey-text;
    display: flex;
    @include media("(max-width : 620px)") {
      width: 100%;
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
      &-content {
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
        @extend .req-comment-section;
        padding-left: 45px;
        @include media("(max-width : 620px)") {
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

