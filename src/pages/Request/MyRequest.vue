<template>
    <div class="req-main">
        <v-container class="req-main-container">
            <v-layout row class="req-search">
                <h2 class="req-search-title">My Requests</h2>
                <v-spacer></v-spacer>
                
            </v-layout>
            <v-layout row class="board-header">
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-header-content">No</p>
                </v-flex>
                <!-- <v-flex xs1 sm1 md1 lg1/> -->
                <v-flex xs3 sm3 md6 lg7 />
                <v-flex xs3 sm2 md3 lg2>
                    <p class="board-header-content">Author</p>
                </v-flex>
                <v-flex>
                    <p class="board-header-content">Date</p>
                </v-flex>
    
            </v-layout>
            <v-layout row class="board-elems" v-for="(item,index) in getWriteResult" :key="index">
                <!--****************AXIOS****************-->
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="board-elems-content">{{getWriteResult.length - index}}</p>
                </v-flex>
    
                <v-flex xs3 sm3 md7 lg7 class="board-elem-text">
                    <p class="board-elems-content">
                        <router-link :to="{ path : '/request/detail', query : item}" class="board-elems-content-link">
                            {{item.iboardTitle}}
                        </router-link>
                    </p>
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="board-elems-content">{{item.userName}}</p>
                </v-flex>
                <v-flex xs5 sm4 md3 lg2>
                    <p class="board-elems-content">{{item.iboardDate}}</p>
                </v-flex>
    
            </v-layout>
        </v-container>
        <!-- <request-pagination></request-pagination> -->
    </div>
</template>

<script>
    import RequestPagination from "../../components/Pagination/RequestPagination";
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['getWriteResult', "getWriteSearchResult"])
        },
        components: {
            RequestPagination
        },
        data() {
            return {
                requestWrite: "/request/write",
                requestSearch: ""
            }
        },
        methods: {
            ...mapActions(["setWriteResult", "setRequestSearchResult"]),
            requestSearchFunc() {
                if (this.requestSearch != "") this.setRequestSearchResult(this.requestSearch);
                this.requestSearch = "";
            }
        },
        created() {
            this.setWriteResult();
        }
    };
</script>

<style lang="scss" scoped>
    @import "styles/common.scss";
    .board-no {
        text-align: center;
    }
    
    p {
        display: inline;
    }
    
    .req-search {
        margin-top: 50px;
        @include media("(max-width : 510px)") {
            margin-top: 30px;
        }
        &-title{
            font-size : 25px;
        }
        &-text {
            border: 1px solid #e4e4e4;
            width: 80%;
            height: 100%;
        }
        &-section {
            width: 40%;
            height: 45px;
            display: flex;
            @include media("(max-width : 820px)") {
                width: 60%;
                height: 30px;
            }
            @include media("(max-width : 510px)") {
                width: 80%;
            }
            &-content {
                display: flex;
                width: 90%;
                margin-right: 20px;
            }
        }
    }
    
    .req-search-btn {
        height: 100%;
        width: 60px;
        background-color: $grey-text;
    }
    
    .req-write-btn {
        height: 100%;
        width: 80px;
        background-color: #e31c9e;
        font-size: 17px;
        color: white;
        @include media("(max-width : 820px)") {
            width: 60px;
        }
        @include media("(max-width : 510px)") {
            width: 40px;
            font-size: 13px;
        }
    }
    
    .board-header {
        margin-top: 70px;
        height: 50px;
        border-bottom: 3px solid black;
        @include media("(max-width : 510px)") {
            margin-top: 30px;
        }
    }
    
    .board-header-content {
        font-size: 21px;
    }
    
    .board-elems {
        height: 60px;
        border-bottom: 1px solid $grey-text;
    }
    
    .board-elems-content {
        line-height: 60px;
        &-link{
            text-decoration: none;
            color : rgba(0,0,0,.87);
            &:hover{
                transition : .1s;
                color : blue;
            }
        }
        @include media("(max-width : 820px)") {
            font-size : 13px;
        }
    }
    
    .board-elem-text {
        padding-left: 15px;
    }
    
    @media screen and (max-width: 550px) {
        .board-header-content {
            font-size: 13px;
        }
        .board-elems-content {
            font-size: 8px;
        }
    }
</style>
