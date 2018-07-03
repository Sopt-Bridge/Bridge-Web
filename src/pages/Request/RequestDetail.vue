<template>
    <div class="req-detail">
        <v-container>
            <v-layout row wrap class="req-detail-title-section">
                <v-flex xs5 sm5 md5 lg5>
                    <div class="req-detail-title">
                        <!-- AXIOS -->
                        <h2>제목입니다.</h2>
                    </div>
                </v-flex>
                <v-flex xs2 sm2 md2 lg2 offset-xs3 offset-sm4 offset-md5 offset-lg5>
                        <!-- AXIOS -->
                        <h3>Interpretation</h3>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="req-detail-board-info-section">
                <v-flex xs4 sm3 md2 lg2>
                    <div class="req-detail-author">
                        <p class="req-detail-tag">Author</p>
                        <!-- AXIOS -->
                        <p>moonluv</p>
                    </div>
                </v-flex>
                <v-flex xs1 sm2 md2 lg2  offset-md3 offset-lg4>
                </v-flex>
                    <div class="req-detail-date">
                        <p class="req-detail-tag">Date</p>
                        <!-- AXIOS -->
                        <p>2018.07.21</p>
                    </div>
                
                
                    <div class="req-detail-views">
                        <p class="req-detail-tag">Views</p>
                        <!-- AXIOS -->
                        <p>999</p>
                    </div>
                
                
                    <div class="req-detail-likes">
                        <p class="req-detail-tag">Likes</p>
                        <!-- AXIOS -->
                        <p>999</p>
                    </div>
            </v-layout>
            <v-layout row wrap class="req-detail-board-content-section">
                <v-flex xs12 sm12 md12 lg12 class="req-detail-board-content">
                    <div class="req-detail-link">
                        <!-- AXIOS -->
                        <a href="https://tv.naver.com/v/3470970"><p>https://tv.naver.com/v/3470970</p></a>
                    </div>
                    <div class="req-detail-board-content-text-section">
                        <!-- AXIOS -->
                        <p class="req-detail-board-content-text">
                            뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!
                            뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!
                            뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!
                            뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!
                            뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!뉴이스트 영상요청이요!!
                        </p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="text-xs-center">
                <div class="likes-btn">
                    <v-icon color="black" medium class="likes-btn-img">thumb_up_alt</v-icon>
                    <!-- AXIOS -->
                    <p>999</p>
                </div>
                
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
.req-detail-title-section {
  margin-top: 90px;
  height: 50px;
  border-bottom: 3px solid black;
}

.req-detail-board-info-section {
  margin-top: 25px;
}

.req-detail-title,
.req-detail-author {
  padding-left: 15px;
}

p {
  display: inline;
  font-size: 15px;
}
.req-detail-tag {
  color: $grey-text;
  margin-right: 10px;
}

.req-detail-views, .req-detail-likes{
    width : 95px;
    text-align : right;
    margin-left : 20px;
    border-left : 1px solid $grey-text;
}

.req-detail-board-content{
    margin-top: 25px;
    height : 500px;
    
}

.req-detail-board-content-text-section{
    margin-top : 25px;
}

.req-detail-board-content-text{
    line-height : 40px;
}

.likes-btn{
    display: inline-block;
    width : 65px;
    height :65px;
    border : 1px solid $grey-text;
    border-radius: 5px;
    cursor: pointer;
}

.likes-btn-img{
    margin-top : 7px;
    display : block;
}

@media screen and (max-width : 632px){
    p{
        font-size : 12.5px;   
    }

    .req-detail-tag{
        margin-right : 3px;
    }

    .req-detail-date{
        margin-left : 20px;
    }
    .req-detail-views, .req-detail-likes{
        width : 65px;
        margin-left : 10px;
        border-left : none;
    }

    .req-detail-board-content-text{
        line-height : 25px;
    }
}

@media screen and (max-width : 487px){
    p{
        font-size : 8px;   
    }
    .req-detail-date{
        margin-left : 0px;
    }

    .req-detail-tag{
        margin-right : 3px;
    }

    .req-detail-board-content{
        margin-top: 25px;
        height : 350px;
        
    }
    .req-detail-views, .req-detail-likes{
        width : 60px;
        margin-left : 0px;
        border-left : none;
    }

    .likes-btn{
    width : 50px;
    height : 50px;
    
    }

    .likes-btn-img{
        margin-top : 2px;
        display : block;
    }
}

</style>
