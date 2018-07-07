<template>
<div class="main">
  <img class="main-img" :src="main_img">
</div>
</template>

<script>
import main_img from '../../assets/img/nu_est_33375.jpg'
export default {
    data(){
        return {
            main_img : main_img
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        width : 100%;
        
        
    }
    .main-img{
        width : 100%;
        height : 100%;
        max-height: 547px;
    }
</style>
