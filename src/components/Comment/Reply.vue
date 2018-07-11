<template>
    <div class="reply">
        <div class="req-comment-reply-section">
            <div class="req-comment-reply-icon">
                <v-icon>subdirectory_arrow_right</v-icon>
            </div>
            <comment class="req-comment-reply"></comment>
        </div>
    </div>
</template>

<script>
    import Comment from "./Comment.vue";
    export default {
        components: {
            Comment
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
