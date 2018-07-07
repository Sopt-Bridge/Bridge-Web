<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex xs1 sm1 md1 lg1>
                <p>Trending</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <!-- <v-flex  -->
        </v-layout>
    </v-container>
</template>

<script>
import videoCard from '../Card/VideoCard.vue'

export default {
    components : {
        'videoCard':videoCard
    }
}
</script>

<style lang="scss" scoped>
    p{
        font-size : 25px;
    }
</style>
