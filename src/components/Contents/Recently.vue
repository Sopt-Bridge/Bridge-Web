<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex xs1 sm1 md1 lg1>
                <p>Recently</p>
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
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <div class="more-video-btn">
                    <p class="more-video-text">더 불러오기</p>
                </div>
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

    .more-video-btn{
        height: 48px;
        background-color : #acacac;
        margin-bottom : 30px;
        text-align: center;
        cursor: pointer;
    }

    .more-video-text{
        line-height: 48px;
    }

    
</style>
