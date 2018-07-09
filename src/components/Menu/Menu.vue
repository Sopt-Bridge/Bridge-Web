<template>
<div class="Menu" @click="closing">
  <div class="Menu-btn" @click="activating">
    {{btnTxt}}
    <div class="Menu-pop">
      <slot class="list-item" name="list"></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['btnTxt'],
  date() {
    return {
      popState: false,
    }
  },
  methods: {
    closing(e) {
      // console.log(e.target.getElementsByClassName('Menu-pop')[0]);
      // if (this.popState === true) {
        // e.target.getElementsByClassName('Menu-pop')[0].classList.toggle('active');
      // }
    },
    activating(e) {
      let popUp = e.target.getElementsByClassName('Menu-pop')[0];
      let state = this.popState;
      popUp.classList.toggle('active');
      state = !state;
      console.log(popUp);
      console.log(state);
    }
  }
}
</script>
<style lang='scss' scoped>
.Menu {
  background-color: white;
  position: relative;
  &-btn {
    user-select: none;
  }
  &-pop {
    background-color: white;
    box-sizing: border-box;
    box-shadow: 0px 0px 3px 0px rgba(128, 128, 128, 0.473);
    position: absolute;
    // display: none;
    // background-color: blue;
    transition: 0.3s;
    transform: scale(0);
    opacity: 0;
    &-list {
      margin: 0;
      padding: 5px;
      list-style: none;
    }
  }
}

.active {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s;
}
</style>
