<template>
<div class="Search-menu" :style="styleObj">
    <div class="Search-menu-items">
      <div class="Search-menu-item" v-for="i in 15" :key="i">
        <div class="Search-menu-item-text">
          {{i}}번쨰 리스트
        </div>
        <div class="Search-menu-item-date">05.24</div>
        <div class="Search-menu-item-closeBtn">X</div>
      </div>
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>

</style>
