<template>
<div>
    <v-toolbar app :clipped-left="clipped">
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <v-toolbar-title>
            <img src="../../assets/img/short logo.svg" class="main_logo">
        </v-toolbar-title>
        <v-layout row wrap>
            <v-flex xs1 sm3 md4 lg5 offset-xs2 offset-md2 offset-lg2>
                <v-text-field flat solo class="nav-search"></v-text-field>
            </v-flex>

            <button class="nav-search-btn"><v-icon color="white">search</v-icon></button>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat large>Subscribe</v-btn>
                <v-btn flat large>Request</v-btn>
                <v-btn flat large>
                    <v-icon>perm_identity</v-icon>
                </v-btn>
            </v-toolbar-items>
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
    height: 48px;
    width: 45px;
    background-color: $main-color;
}
</style>