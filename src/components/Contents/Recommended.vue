<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex xs1 sm1 md1 lg1>
                <p>Recommended</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs3 sm3 md3 lg3>
                <video-card></video-card>
            </v-flex>
            <v-flex xs3 sm3 md3 lg3>
                <video-card></video-card>
            </v-flex>
            <v-flex xs3 sm3 md3 lg3>
                <video-card></video-card>
            </v-flex>
            <v-flex xs3 sm3 md3 lg3>
                <video-card></video-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import VideoCard from './VideoCard'

export default {
    components : {
        VideoCard
    }
}
</script>

<style lang="scss" scoped>
    p{
        font-size : 25px;
    }

</style>
