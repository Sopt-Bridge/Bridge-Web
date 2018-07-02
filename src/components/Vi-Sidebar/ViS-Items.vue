<template>
<div class="ViS-Items">
  <div class="ViS-Items-item">
    <slot></slot>
    <div class="ViS-Items-name">{{item.name}}</div>
    <div class="ViS-Items-date">{{item.date}}</div>
    <div class="ViS-Items-comment">{{item.comment}}</div>
    <div class="ViS-Items-like">{{item.like}}</div>
    <div class="ViS-Items-likeBtn">GG</div>
    <div class="ViS-Items-replyBtn">답글달기</div>
    <!-- <ViS-Reply :Ritem="item.reply"></ViS-Reply> -->
  </div>
</div>
</template>
<script>
import Reply from './ViS-Reply.vue';

export default {
  props:['item'],
  components:{
    'ViS-Reply':Reply
  }
}
</script>
<style lang='scss' scoped>

</style>
