<template>
    <div>
    <v-container>
        <v-layout row wrap class="req-search">
            <v-flex xs4 sm4 md4 lg4 offset-xs4 offset-sm5 offset-md5 offset-lg6>
                <div class="test">
                    <v-text-field solo></v-text-field>
                </div>
            </v-flex>
            <v-flex xs1 sm1 md1 lg1>
                <button class="req-search-btn"><v-icon>search</v-icon></button>
            </v-flex>
            <v-flex xs1 sm1 md1 lg1 >
                <router-link :to="requestWrite">
                    <button class="req-write-btn">write</button>
                </router-link>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="board-header">
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-header-content">No</p>
                </v-flex>
                <!-- <v-flex xs1 sm1 md1 lg1/> -->
                <v-flex xs6 sm7 md7 lg7 />
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-header-content">Author</p>
                </v-flex>
                <v-flex>
                    <p class="board-header-content">Date</p>
                </v-flex>
                
        </v-layout> 
        <v-layout row wrap class="board-elems">
            <!--****************AXIOS****************-->
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
               
        </v-layout>
        <v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout>
        <v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout>
        <v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md2 lg1>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout><v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md2 lg1>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout><v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
               
        </v-layout><v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout><v-layout row wrap class="board-elems">
            <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout><v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout><v-layout row wrap class="board-elems">
           <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">448</p>
                </v-flex>
                
                <v-flex xs6 sm7 md7 lg7>
                    <p class="board-elems-content">뉴이스트 영샹 요청이요</p>
                    
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">moonluv</p>
                </v-flex>
                <v-flex>
                    <p class="board-elems-content">2018.01.01</p>
                </v-flex>
                
        </v-layout>
        
    </v-container>
    <request-pagination></request-pagination>
    </div>
    
    
</template>

<script>
import RequestPagination from '../../components/Pagination/RequestPagination'
export default {
    components : {
        RequestPagination
    },
    data(){
        return {
            requestWrite : '/request/write'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "styles/common.scss";

.board-no{
    text-align: center;
}

p{
    display: inline;
}

.req-search{
    margin-top : 100px;
}

.req-search-btn{
    height: 49px;
    width: 70px;
    background-color: $grey-text;
}

.req-write-btn{
    margin-left : 25px;
    height: 49px;
    width: 93px;
    background-color: #E31c9e;
    font-size : 17px;
    color : white;
}

.board-header{
    margin-top : 90px;
    height : 50px;
    border-bottom : 3px solid black;
}

.board-header-content{
    font-size : 21px;
}

.board-elems{
    height : 160px;
    border-bottom : 1px solid $grey-text;
}

.board-elems-content{
    line-height: 160px;
}

@media screen and (max-width : 550px){
    .board-header-content{
        font-size : 13px;   
    }
    .board-elems-content{
        font-size : 8px;
    }
}
</style>
