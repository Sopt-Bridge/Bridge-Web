<template>
<div class="MainPoster">
    <swiper class="MainPoster-swiper" :options="swiperOption">
        <swiper-slide class="MainPoster-swiper-slide" v-for="i in 4" :key="i">Slide {{i}}</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
import main_img from '../../assets/img/nu_est_33375.jpg'
export default {
    data() {
        return {
            main_img: main_img,
            swiperOption: {
                // slidesPerView: 'auto',
                // centeredSlides: true,
                // spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.MainPoster {
    z-index: 0;
    background-color: blue;
    &-swiper {
        &-slide {
            height: 543px;
            @media screen and (max-width: 1000px) {
                height:480px;
            }
            @media screen and (max-width: 860px) {
                height:360px;
            }
            @media screen and (max-width: 500px) {
                height:280px;
            }
            @media screen and (max-width: 376px) {
                height:220px;
            }
            background-position: center;
            background-size: 100% auto;
            background-color: red;
            background-image: url(https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/30/68/7a/30687a5b-ccc5-0b1a-3035-574c060f2508/cover-KARD.jpg/600x600bf.jpg);
        }
    }
}

.main-img {
    width: 100%;
    height: 100%;
    max-height: 547px;
}
</style>
