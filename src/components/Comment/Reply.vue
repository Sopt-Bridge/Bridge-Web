<template>
            <v-layout row wrap>
                <!-- ***AXIOS*** -->
                <div class="req-comment-section">
                    <div class="req-comment-user-icon">
                        <v-icon>person</v-icon>
                    </div>
                    <div class="req-comment-user-container">
                        <div class="req-comment-user-info">
                            <div class="req-comment-user-info-nickname req-comment-user-info-detail">
                                <div>
                                    <!--***AXIOS**-->
                                    <p>SML</p>
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
                            <p>Hello World! I'm Sang min lee. ahahahaha</p>
                        </div>
                    </div>
                </div>
            </v-layout>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
    @import "styles/common.scss";
    p{
        display: inline;
        font-size : 15px;
    }
    i{
        width : 70px;
        height : 70px;
        font-size : 45px;
        margin-left : 10px;
    }

    .req-comment{
        &-section{
            width : $remain;
            height : $comment-height;
            border-bottom : 1px solid $grey-text;
            display: flex;
        }
        &-user{
            &-icon{
                width : 92px;
            }
            &-container{
                display: flex;
                flex-direction: column;
                width : 100%;
            }
            &-comment{
                &-detail{
                    height : 100%;
                }
            }
            &-info{
                width : 100%;
                height : 70px;
                &-nickname{
                    width : 100%;
                    height : 60%;
                }
                &-detail{
                    display: flex;
                    align-items : flex-end;
                }
                &-btn{
                    font-size : 13px;
                    cursor: pointer;
                    &-reply{
                        margin-left : 26px;
                    }
                }
                &-date{
                    font-size : 13px;
                    color : $grey-text;
                    &-section{
                    width : 100%;
                    height : 30%;
                    }
                }
            }
        }
    }
</style>
