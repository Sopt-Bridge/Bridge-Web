<template>
<v-navigation-drawer @click="drawer != drawer" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app >
    <v-layout row wrap v-for="(item, i) in items" :key="i">
        <v-flex md12>
            <div class="navbar-drawer">
                <a>
                    <p>{{ item.title }}</p>
                </a>
            </div>
        </v-flex>
    </v-layout>
</v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    // icon: "bubble_chart",
                    title: "HOT"

                },
                {
                    title: "K-content"
                },
                {
                    title: "K-pop"
                },
                {
                    title: "Fun"
                },
                {
                    title: "Culture"
                }

            ],
            fixed: true,
            drawer: false,
            clipped: true
        }
    },
    methods:{
        drawing(){
            return !this.drawer;
        }
    }

}
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
.navbar-drawer {
    height: 110px;
}

.navbar-drawer a p {
    font-size: 32px;
    color: #333333;
    margin-left: 50px;
    line-height: 15vh;
}

.navbar-drawer a p:active {
    color: #E31C9E;
}
</style>
