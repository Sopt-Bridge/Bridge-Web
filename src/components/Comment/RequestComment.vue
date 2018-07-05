<template>
    <div class="req-comment">
        <v-container>
            <v-layout row wrap>
                <div class="req-comment-count-section">
                    <p>Comments</p>
                    <!-- ***AXIOS*** -->
                    <p class="req-comment-count">4</p>
                </div>
            </v-layout>
            <v-layout row wrap >
                <v-flex xs12 sm12 md12 lg12 class="req-comment-user-content-section">
                    <div class="req-comment-user-content-inner-section">
                        <textarea class="req-comment-user-content" :placeholder="comment"></textarea>
                    </div>
                    <div class="req-comment-btn-section">
                        <button class="req-comment-btn">Comment</button>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <!-- ***AXIOS*** -->
                <div class="req-comment-section">
                    <div class="req-comment-user-info">
                        <v-icon>person</v-icon>
                    </div>
                </div>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            comment : "Please input comment..."
        }
    }
}
</script>
<style lang='scss' scoped>
    @import "styles/common.scss";
    $button-width-height : 95px;  
    $remain : 0px;
    $comment-height : 97px;  
    p{
        display: inline;
        font-size : 15px;
    }
    .req-comment{
        &-count{
            padding-left : $inner-padding;
        }
        &-user{
            &-content{
                width : 100%;
                height : 100%;
                &-section{
                    display: flex;
                    margin-top : 19px;
                    height : $comment-height;
                }
                &-inner-section{
                    $remain : calc(99% - 95px) !global;
                    width : $remain;
                    margin-right: 1%;
                    height : 100%;
                    border : 1px solid $grey-text;
                    border-radius: 5px;
                    padding : 10px 10px 10px 10px;
                }
            }
        }
        &-btn{
            height : $button-width-height;
            width : $button-width-height;
            background-color: $grey-text;
            border-radius: 5px;
        }
        &-section{
            width : $remain;
            height : $comment-height;
            border-bottom : 1px solid $grey-text;
        }
    }
</style>
