<template>
<div>
    <v-toolbar app :clipped-left="clipped">
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <v-toolbar-title>
            <router-link :to="home">
                <img src="../../assets/img/short logo.svg" class="main_logo">
            </router-link>
        </v-toolbar-title>
        <v-layout row wrap>
            <v-flex xs1 sm3 md4 lg5 offset-xs2 offset-md2 offset-lg2>
                <v-text-field solo class="nav-search"></v-text-field>
            </v-flex>

            <button class="nav-search-btn"><v-icon color="white">search</v-icon></button>
            <v-spacer></v-spacer>
            
                <v-btn flat large>Subscribe</v-btn>
                <v-btn flat large>
                    <router-link :to='request'>
                        Request
                    </router-link>
                </v-btn>
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
            
        </v-layout>
    </v-toolbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            clipped: true,
            drawer: true,
            request : '/request',
            home : '/',
            name : 'lee',
            email : 'abc@abc.com'
        };
    }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
.main_logo {
    width: 70px;
    margin-top: 8px;
}

.nav-search {
    margin-top: 8px;
    border: .5px black;
}

.nav-search-btn {
    margin-top: 8px;
    height: 49px;
    width: 45px;
    background-color: $main-color;
}

a{
    text-decoration: none;
    color : black;
}
</style>