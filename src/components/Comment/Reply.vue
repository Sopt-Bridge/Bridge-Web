<template>
    <div class="reply">
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
                                <!-- <p class="req-comment-user-info-nickname-text">SML</p> -->
                                <p class="req-comment-user-info-nickname-text">{{replyElement.userName}}</p>
                            </div>
                            <v-spacer/>
                            <div>
                                <!--***AXIOS**-->
    
                                
                            </div>
                        </div>
                        <div class="req-comment-user-info-date-section req-comment-user-info-detail">
                            <div>
                                <!--***AXIOS**-->
                                <!-- <p class="req-comment-user-info-date">01/01/2018</p> -->
                                <p class="req-comment-user-info-date">{{replyElement.ircmtDate}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="req-comment-user-comment-detail">
                        <!--***AXIOS**-->
                        <!-- <p class="req-comment-user-comment-detail-text">Hello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee.
                                    ahahahahaHello World! I'm Sang min lee. ahahahaha</p> -->
                        <p class="req-comment-user-comment-detail-text">{{replyElement.ircmtContent}}</p>
                        <!-- <div class="req-comment-user-comment-detail-space"></div> -->
                    </div>
                </div>
    
            </div>
        </v-layout>
    </div>
</template>

<script>
    // import Comment from "./Comment.vue";
    export default {
        data() {
            return {
    
            }
        },
        components: {
    
        },
        props: ['replyElement'],
        created() {
            console.log(this.replyElement);
        }
    };
</script>

<style lang='scss' scoped>
    @import "styles/common.scss";
    p {
        display: inline;
        font-size: 15px;
    }
    
    .reply {
        width: 100%;
    }
    
    .req-comment {
        &-reply {
            &-section {
                border-bottom: 1px solid $grey-text;
                padding-left: 15px;
                display: flex;
                @include media("(max-width : 620px)") {
                    padding-left: 0px;
                }
            }
            &-btn {
                width: $button-width-height;
                background-color: $grey-text;
                border-radius: 5px;
                height: 45px;
                margin-top: 19px;
                @include media("(max-width : 620px)") {
                    height: 60px;
                }
            }
        }
        &-user {
            &-content {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
