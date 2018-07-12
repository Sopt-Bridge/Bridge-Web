<template>
    <div class="search">
        <v-container>
            <v-layout row wrap>
                <v-flex xs10 sm10 md10 lg10 offset-xs1 offset-sm1 offset-md1 offset-lg1>
                    <div class="search-header">
                        <div>
                            About {{ total }} results
                        </div>
                        <v-spacer/>
                        <v-menu offset-x left>
                            <button class="search-header-btn" slot="activator">
                                                  {{btnName}}
                                                  <img :src="subFilter" width="25px" alt="">
                                                </button>
                            <v-card>
                                <v-list-tile class="search-header-btn-item">
                                    <v-list-tile-title @click="changeBtnName()">
                                        Upload date
                                    </v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile class="search-header-btn-item" @click="changeBtnNameReverse()">
                                    <v-list-tile-title>
                                        View count
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-card>
    
                        </v-menu>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex slot="card" v-for="(item,index) in getSearchResult" :key="index" xs10 sm10 md10 lg10 offset-xs1 offset-sm1 offset-md1 offset-lg1>
                    <div class="search-elem">
                        <video-card :wrap="true" :item="item">
                            <more-menu slot="more"></more-menu>
                        </video-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import subFilter from '../assets/img/subscribe/drawable-xxxhdpi/search_filter_icon.png';
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    import moreMenu from "../components/Card/Home-cardMore";
    export default {
        data() {
            return {
                total: 40,
                subFilter,
                btnName: "Upload date"
            }
        },
        computed: {
            ...mapGetters(['getSearchResult'])
        },
        methods: {
            ...mapActions(["setSearchResult"]),
            changeBtnName() {
                this.btnName = "Upload date";
                this.$router.push({
                    path: 'search',
                    query: {
                        pageIdx: this.$route.query.pageIdx,
                        searchname: this.$route.query.searchname,
                        searchType: this.$route.query.searchType,
                        sortType: 0
                    }
                })
            },
            changeBtnNameReverse() {
                this.btnName = "View count"
                this.$router.push({
                    path: 'search',
                    query: {
                        pageIdx: this.$route.query.pageIdx,
                        searchname: this.$route.query.searchname,
                        searchType: this.$route.query.searchType,
                        sortType: 2
                    }
                })
            }
        },
        created() {
            let data = {
                pageIdx: this.$route.query.pageIdx,
                searchname: this.$route.query.searchname,
                searchType: this.$route.query.searchType,
                sortType: this.$route.query.sortType
            }
            // this.setSearchResult(this.$route.params.query);
            this.setSearchResult(data);
        },
        components: {
            moreMenu
        }
    
    }
</script>

<style lang='scss' scoped>
    .search {
        &-header {
            width: 100%;
            height: 40px;
            margin-bottom: 30px;
            margin-top: 40px;
            font-size: 17px;
            display: flex;
            padding: 0px 10px 0px 10px;
            border-bottom: 3px solid black;
            &-btn {
                font-size: 17px;
                img {
                    margin-left: 10px;
                }
                &-item:hover {
                    transition: 0.3s;
                    background-color: rgba(141, 141, 141, 0.5);
                }
            }
        }
        &-elem {
            width: 100%;
            height: 200px;
            background-color: aqua;
            margin-bottom: 10px;
        }
    }
</style>
