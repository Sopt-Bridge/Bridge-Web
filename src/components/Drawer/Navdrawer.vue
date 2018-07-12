<template>
<div class="nav-drawer">
    <v-navigation-drawer @click="drawer = !drawer" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app class="navbar-drawer" hide-overlay>
        <div class="navbar-drawer-icon-clear" @click="drawer = !drawer">
            <v-icon medium>clear</v-icon>
        </div>
        <div class="navbar-drawer-components">
            <ul class="navbar-drawer-components-lists">
                <li class="navbar-drawer-components-lists-item" v-for="(item,index) in items" :key="index">
                    <a @click="changeColor(index)">
                        <p :class="position" class="navbar-drawer-components-lists-item-title">{{ item.title }}</p>
                    </a>
                    <!-- <div v-if="item.subtitle">시발 이건 섭타이틀 있다{{index}}</div> -->
                    <ul class="navbar-drawer-components-sublists" v-if="index===1">
                        <li class="navbar-drawer-components-sublists-item" v-for="(group,idx) in subtitle" :key="'sub'+idx">
                            <a @click="changeColor(index+idx+1)">
                                <p :class="position" class="navbar-drawer-components-sublists-item-title">{{ group.groupTitle }}{{index+idx+1}}</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </v-navigation-drawer>
    <div class="navbar-drawer-icon-more" v-if="!drawer" @click="drawer = !drawer">
        <img :src="more" class="navbar-drawer-icon-more-img">
    </div>
</div>
</template>

<script>
import {
    mapMutations,
    mapGetters
} from 'vuex'
import more_icon from '../../assets/img/hamburger_open_btn.svg'
export default {
    props: ['items', 'position'],
    data() {
        return {
            fixed: true,
            drawer: false,
            clipped: true,
            more: more_icon,
            btnState: 0
        };
    },
    computed: {
        btnLength() {
            return document.getElementsByClassName(this.position).length;
        },
        subtitle() {
            if (this.position === 'MyPageNav') {
                return this.getGroupList
            } else {
                return false;
            }
        },
        ...mapGetters(['getGroupList'])
    },
    methods: {
        drawing() {
            return !this.drawer;
        },
        changeColor(index) {
            // console.log(index);
            this.$emit('navBtnState', index);
            for (let i = 0; i < this.btnLength; i++) {
                document.getElementsByClassName(this.position)[i].style.color = "#333333";
            }
            this.btnState = index;
            document.getElementsByClassName(this.position)[index].style.color = "#E31c9e";
            if (window.screen.availWidth < 510) {
                this.drawer = false;
            }
        },
    },
    mounted() {
        document.getElementsByClassName(this.position)[0].style.color = "#E31c9e";
    }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
$navigation-top: 64px;
.navbar-drawer {
    z-index: 2;
    top: $navigation-top;
    @include media("(max-width: 510px)") {
        top: $navigation-top + 40px;
    }
    &-components {
        margin-top: 80px;
        margin-left: 40px;
        &-lists {
            list-style: none;
            padding-left: 0px;
            &-item {
                height: 70px;
                &-title {
                    font-size: 27px;
                    color: #333333;
                }
            }
        }
    }
    &-icon {
        &-clear {
            position: absolute;
            margin-left: 260px;
            margin-top: 10px;
            cursor: pointer;
        }
        &-more {
            position: fixed;
            cursor: pointer;
            margin-left: -13px;
            margin-top: 100px;
            z-index: 2;
            &-img {
                width: 50px;
                height: 50px;
            }
        }
    }
}

.navbar-drawer-components-sublists {
    list-style: none;
    padding-left: 0px;
    padding-top : 15px;
    &-item {
        height: 70px;
        &-title {
            font-size: 20px;
            color: #333333;
        }
    }
}

// ul li:nth-child(1) p {
//     color: $main-color;
// }
</style>
