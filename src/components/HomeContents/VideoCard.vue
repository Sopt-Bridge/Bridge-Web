<template>
    <div class="video-card">
        <!-- <img :src="video_card_src" class="video-img"> -->
        <thumbnail class="video-card-thumbnail"></thumbnail>
        <div class="video-contents">
            <div class="video-title">
                <p>{{ title }}</p>
            </div>
            <div class="hashtag">
                <p class="hashtag-content">{{ hashtag }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import video_card from '../../assets/img/92841655008f42dd1c069d8c6246a2c881b620d5_hq.jpg'
export default {
    data(){
        return {
            video_card_src : video_card,
            title : 'BTS - FAKE LOVE @BTS PERFECT COMEBACK SHOW',
            hashtag : '#BTS #BANGTAN'

        }
    }
}
</script>

<style lang="scss" scoped>
@import 'styles/common.scss';
    .video-card{
        width : 100%;
        height : 275px;
        &-thumbnail{
            width : 100%;
            height : 182px;
        }

    }



    .video-img{
        width : 100%;
        height : 182px;
    }

    .hashtag{
        display: flex;
        &-content{
            color : $main-color;
        }
    }

</style>
