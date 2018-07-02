# Cording Guide

- Cording Guide
  - 세팅
  - 구조
    - components
      - compont 폴더
    - pages
  - 이름
    - component
    - page
    - style/scss
  - style/css
- 지키면 좋고 아니면 말고
  - template 순서
  - JS indent
  - JS 변수명

## 세팅

- vue cli : vue init vuetifyjs/webpack
- sytle : node-sass, sass-loader 사용

## 구조

### components

```
-src
--components
---index.js//모든 컴포넌트를 등록시켜 놓는곳
--pages
```

```js
//index.js
import Vue from 'vue';
import Rand from './Rand.vue';
import Rand2 from './Rand-test.vue'

Vue.component('Rand',Rand);
Vue.component('Rand-test',Rand2);

export default Vue;
```

컴포넌트들은 index.js에 등록시켜 놓고 전역으로 사용.
> 전역 필요없는 것은 등록할 필요 없음

#### compoent 폴더
예시
```
-components
--Vi-main
---Vi-Main.vue // 전역으로 등록시킬 컴포넌트
---ViM-Infor.vue
---ViM-Video.vue
```
전역으로 등록시킬 컴포넌트는 폴더와 이름이 같게한다.
> ex) Vi-main -> Vi-main.vue

전역으로 등록시킬 컴포넌트에서만 사용할 컴포넌트는 같은 폴더 안에 만든다.
>ex) ViM-infor.vue와 ViM-Video.vue는 Vi-Main.vue에서만 사용하기 때문에 전역으로 등록시킬 필요가 없다.


### pages

전역으로 `/components`에 있는 component들을 사용.

페이지 레이아웃에 관련된 사항은 `./pages`에 컴포넌트를 관리한다.

## 이름

### component

컴포넌트 이름은 기본적으로 PascalCase으로 표기한다.
>ex)NavigationBar.vue, Sidebar.vue

이름이 너무 길어지는 경우에는 약어로 된 접두사를 사용한다.<br>
첫문자를 대문자를 하고 하이픈('-')뒤에 오는 첫 문자를 대문자로 연결한다.
>ex) VideoSideBarInfor.vue (Video->Vi) => Vi-SidebarInfor.vue => ViS-Infor.vue

### pages
```
-pages
--MyPages
---Library
----Libray.vue
----LibrayFolder.vue
----ShowMore.vue
---MyPage.vue
---MyWriting.vue
```

컴포넌트 이름은 기본적으로 PascalCase으로 표기한다.
>ex) MyPage.vue, LibrayFolder.vue

페이지 안에도 `<router-view>`로 중천된 페이지가 있을때는
폴더를 안에 만들어서 관리한다.

### class/style naming

```html
<template>
<div class="Rand">
  <div class="Rand-text">We, Korea offer</div>
  <div class="Rand-text">the best K-content for you</div>
  <v-btn class="Rand-btn">START</v-btn>
</div>
</template>
```
기본적으로 `Root Element` **클래스 이름**는 **컴포넌트 이름**과 같게한다.(이왕이면)

`Child Element`의 **클래스 이름**은 `Root Element` 클래스 이름에
하이픈('-')을 붙여 사용한다.
>ex) class="Rand" => class="Rand-text"

왜냐하면 class이름을 다르게하여 DOM을 조작할 때 편하게 하기위해서이고. style 설정을 편하게 하기 위해서이다.

```html
<template>
<div class="Rand">
  <div class="Rand-text color">We, Korea offer</div>
  <div class="Rand-text color">the best K-content for you</div>
  <v-btn class="Rand-btn">START</v-btn>
</div>
</template>
```

공통된 클래스 삽입은 상관없음


## STYLE

```css
<style lang="scss" scoped>
</style>
```
기본적으로 `lang="scss"`와 `scoped` 속성 추가하여 사용

```html
<template>
<div class="Rand">
  <div class="Rand-text color">We, Korea offer</div>
  <div class="Rand-text color">the best K-content for you</div>
  <v-btn class="Rand-btn">START</v-btn>
</div>
</template>
```
```scss
<style lang="scss" scoped>
.Rand{
  width:500px;
  height:500px;
  &-text{
    color:white;
    background-color:black;
  }
  &-btn{
    color:pink;
    background-color:white;
  }
}

.color{
  color:red;
}
</style>
```

scss 사용 예시

`Child element`에는 하이픈을 붙여 사용하고.
`sylte`에서 `&-`를 붙여 스타일을 조작한다.

<hr>

# 지키면 좋고 아니면 말 것들

## template 순서

`sciprt`에서 순서는 다음을 따른다.
```js
<script type="text/javascript">
  export default {
    // Do not forget this little guy
    name: 'RangeSlider',
    // component properties/variables
    props: {
      bar: {}, // Alphabetized
      foo: {},
      fooBar: {},
    },
    // variables
    data() {},
    computed: {},
    // when component uses other components
    components: {},
    // methods
    watch: {},
    methods: {},
    // component Lifecycle hooks
    beforeCreate() {},
    mounted() {},
};
</script>
```

## indent

스페이스는 두 줄 사용.

## JS 변수명

camaelCase 사용
>ex) `let layoutTop`;