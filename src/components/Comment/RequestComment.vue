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

    i{
        width : 70px;
        height : 70px;
        font-size : 45px;
        margin-left : 10px;
    }

    .req-comment{
        &-count{
            padding-left : $inner-padding;
        }
        &-user{
            &-container{
                display: flex;
                flex-direction: column;
                width : 100%;
            }
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
            &-comment{
                &-detail{
                    
                    height : 100%;
                    
                }
            }
            &-icon{
                width : 92px;
            }
            &-info{
                width : 100%;
                height : 70px;
                display: block;
                &-detail{
                    display: flex;
                    align-items : flex-end;
                }
                &-nickname{
                    width : 100%;
                    height : 60%;
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
            display: flex;
        }
    }
</style>
