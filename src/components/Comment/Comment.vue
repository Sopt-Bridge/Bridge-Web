<template>
    <div class="comment">
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
                                <p class="req-comment-user-info-btn req-comment-user-info-btn-reply" @click="toggleShowReply()">REPLY</p>
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
                        <p class="req-comment-user-comment-detail-text">Hello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee. ahahahahaHello World! I'm Sang min lee.
                            ahahahahaHello World! I'm Sang min lee. ahahahaha</p>
                        <!-- <div class="req-comment-user-comment-detail-space"></div> -->
                    </div>
                </div>
            </div>
        </v-layout>
    
    </div>
</template>

<script>
export default {
    props : ["propsShowReply"],
    methods : {
        toggleShowReply(){
            let temp = !this.propsShowReply;
            this.$emit("changeData", temp);
        }
    },
    computed : {
        
    }
};
</script>

<style lang='scss' scoped>
@import "styles/common.scss";

</style>
