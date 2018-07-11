<template>
<div class="Modal">
  <slot name="activator"></slot>
  <div class="Modal-pop" :style="{visibility:popUp}">
    <div class="Modal-pop-menu" :style="{maxHeight:modalH+'px',marginTop:modalMarginTop+'px'}">
      <slot name="head">
        <div class="Modal-contents-head" slot="head">
          <div class="leftBox">
            Total 58
          </div>
          <div class="rightBox" @click="closing">
            <v-icon medium>clear</v-icon>
          </div>
        </div>
      </slot>
      <slot name="contents" :style="{height:modalHeadHeight+'px'}"></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['popState'],
  date() {
    return {}
  },
  computed: {
    popUp() {
      if (this.popState) {
        return 'visible'
      } else {
        return 'hidden'
      }
    },
    screenH() {
      let h = window.screen.availHeight;
      return h;
    },
    modalH() { //모달의 높이를 리턴하는 계산
      // let w = window.screen.availWidth*0.6;
      let h = this.screenH * 0.8;
      // console.log(h);
      return h;
    },
    modalMarginTop() { //모달의 마진 탑을 리턴하는 계산
      let top = this.screenH * 0.05;
      return top;

    },
    modalHeadHeight() {
      let h = this.modalH - this.modalMarginTop;
      console.log(h);
      return h;
    }
  },
  methods: {
    modalring() {
      // console.log('click');
      this.$emit('dailoging', this.popState);
    },
    closing() {
      this.$emit('closing', false);

    }
  }
}
</script>
<style lang='scss' scoped>
.Modal {
  position: relative;
  &-pop {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: black;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    &-menu {
      margin-left: auto;
      margin-right: auto;
      max-width: 1000px;
      @media screen and (max-width: 1200px) {
        max-width:850px;
      }
      width: 100%;
      background-color: white;
    }
  }
  &-contents {
    &-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #F5F5F5;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}

.leftBox {
  padding-left: 20px;
  font-size: 14px;
}

.rightBox {
  padding-right: 20px;
  cursor: pointer;
}

.Subscribe {
  &-Modal {
    &-contents {}
  }
}
</style>
