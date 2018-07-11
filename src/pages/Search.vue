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
                        <div>
                            Upload date
                        </div>
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
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    import moreMenu from "../components/Card/Home-cardMore";
    export default {
        data() {
            return {
                total: 40
            }
        },
        computed: {
            ...mapGetters(['getSearchResult'])
        },
        methods : {
            ...mapActions(["setSearchResult"])
        },
        created(){
            let data = {
                pageIdx : 0,
                searchname : 'black',
                searchType : 1,
                sortType : 0
            }
            // this.setSearchResult(this.$route.params.query);
            this.setSearchResult(data);
        },
        components : {
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
        }
        &-elem {
            width: 100%;
            height: 200px;
            background-color: aqua;
            margin-bottom: 10px;
        }
    }
</style>
