<template>
    <div class="req-detail">
        <v-container class="req-detail-container">
            <v-layout row wrap class="req-detail-title-section">
                <div class="req-detail-title">
                        <!-- AXIOS -->
                    <h2 class="req-detail-title-tag">제목입니다.</h2>
                </div>
                <v-spacer></v-spacer>
                <div class="req-detail-translate">
                    <h2 class="req-detail-title-tag">Translation</h2>
                </div>
            </v-layout>
            <v-layout row wrap class="req-detail-board-info-section">
                
                <div class="req-detail-author">
                    <p class="req-detail-tag">Author</p>
                    <!-- AXIOS -->
                    <p>moonluv</p>
                </div>
                <v-spacer></v-spacer>
                <div class="req-detail-date">
                    <p class="req-detail-tag">Date</p>
                    <!-- AXIOS -->
                    <p>2018.07.21</p>
                </div>                
            </v-layout>
            <v-layout row wrap class="req-detail-board-content-section">
                
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
                
            </v-layout>
            <v-layout row wrap justify-end>
                <div class="req-detail-btn-section">
                    <button class="req-detail-btn req-detail-edit">Edit</button>
                    <button class="req-detail-btn req-detail-delete">Delete</button>
                </div>
            </v-layout>
            
        </v-container>
        <request-comment></request-comment>
        
    </div>
</template>

<script>
import RequestComment from '../../components/Comment/RequestComment'
export default {
    components : {
        RequestComment
    }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";


.req-detail-title-section {
  margin-top: 90px;
  height: 50px;
  border-bottom: 3px solid black;
}

.req-detail-board-info-section, .req-detail-board-content-section {
  margin-top: 25px;
  padding : 0px $inner-padding 0px $inner-padding;
}

.req-detail-translate{
    padding-right : $inner-padding;
}


.req-detail-title{
  padding-left : $inner-padding;
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


.req-detail-board-content-text-section{
    margin-top: 50px;
    min-height : 300px;
}

.req-detail-board-content-text{
    line-height : 40px;
}

.req-detail-btn{
    border : 1px solid black;
}


.req-detail-btn-section{
    text-align : center;
}

.req-detail-btn{
    border : 1px solid $grey-text;
    border-radius: 5px;
    width : 93px;
    height : 44px;
}

.req-detail-edit{
    margin-right : 15px;
}

.req-detail-delete{
    margin-left : 15px;
    background-color: $main-color;
    color : white;
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

    .req-detail-btn{
        border : 1px solid $grey-text;
        border-radius: 5px;
        //width : 93px;
        //height : 44px;
        width : 60px;
        height : 30px;
    }

    .req-detail-edit{
        margin-right : 4px;
    }

    .req-detail-delete{
        margin-left : 4px;
    }
}

@media screen and (max-width : 487px){
    .req-detail-title-section{
        height : 30px;
    }

    p{
        font-size : 8px;   
    }

    .req-detail-title-tag{
        font-size : 15px;
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

    .req-detail-btn{
        border : 1px solid $grey-text;
        border-radius: 5px;
        //width : 93px;
        //height : 44px;
        width : 50px;
        height : 25px;
    }

    .req-detail-edit{
        margin-right : 3px;
    }

    .req-detail-delete{
        margin-left : 3px;
    }

    
}

</style>
