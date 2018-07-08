<template>
<div class="Toolbar-container">
    <div class="Toobar">
        <div class="Toobar-wrap">
            <div class="Toobar-upBox">
                <div class="Toobar-logo">
                    <router-link :to="home">
                        <img src="../../assets/img/short logo.svg" class="main_logo">
                    </router-link>
                </div>
                <div class="Toobar-search">
                    <search-bar class="Toolbar-search-bar" :styleObj="searchStyle"></search-bar>
                </div>
                <button class="nav-search-btn"><v-icon color="white">search</v-icon></button>
            </div>
            <div class="Toobar-items">
                <div class="Toobar-items-item">
                    <span>Subscriptions</span>
                </div>
                <div class="Toobar-items-item Toobar_Btn">
                    <span>Request</span>
                </div>
                <div class="Toobar-items-my">
                    <v-menu offset-y>
                        <v-btn icon slot="activator">
                            <v-icon>perm_identity</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-title>{{ name }}</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-title>{{ email }}</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-title>내가 쓴글</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-title>Library</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-title>Sign Out</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import searchBar from './SearchBar.vue';

export default {
    data() {
        return {
            clipped: true,
            drawer: true,
            request: '/request',
            home: '/',
            name: 'lee',
            email: 'abc@abc.com',
            items: {},
            searchStyle: {
                width: '100%'
            }
        }
    },
    components: {
        searchBar
    }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";



.Toobar {
    box-shadow: 0px 2px 6px 1px gray;
    z-index:3;
    position: fixed;
    width:100%;
    background-color: white;    
    &-wrap {
        padding-top: 8px;
        padding-bottom: 8px;
        display: flex;
        @media screen and (max-width: 510px) {
            flex-wrap: wrap;
            padding-bottom: 4px;
        }
    }
    &-upBox {
        display: flex;
        align-items: center;
        flex-shrink: 1;
        flex-grow: 3;
        margin-right: auto;
    }
    &-logo {
        margin-left: 3.5%;
        margin-right: 3.5%;
    }
    &-search {
        flex-grow: 1;
        margin-left: 7%;
    }
    &-items {
        display: inline-flex;
        flex-grow: 1;
        justify-content: flex-end;
        user-select: none;
        padding-right: 3%;
        @include media("(max-width: 510px)"){
            justify-content: space-around;
        }
        &-item {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 7px;
            font-size: 17px;
            flex-shrink: 1;
            margin: {
                left: 5px;
                right: 7%;
            }
            padding: 5px;

            @include media("(max-width: 860px)"){
                font-size : 12px;
                margin : {
                    right : 3%;
                }
            }
            @include media("(max-width: 510px)"){
                font-size : 17px;
                margin : {
                    left : 0px;
                    right : 0px;
                }
            }
            &:hover {
                transition: 0.5s;
                background-color: rgba(151, 150, 150, 0.596);
            }
            
        }
    }
}



// .Toobar {
//     &_Btn {
//         border-radius: 5px;
//         transition-duration: 0.5s;
//         &:hover {
//             transition-duration: 0.5s;
//             background-color: rgba(158, 157, 157, 0.6);
//         }
//     }
// }
.main_logo {
    width: 60px;
    margin-top: 8px;
}

.nav-search-btn {
    height: 45px;
    width: 45px;
    background-color: $main-color;
    margin-right: auto;
    @include media('(max-width : 510px)'){
        margin-right : 8px;
    }
}
</style>