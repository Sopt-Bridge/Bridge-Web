import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import {video} from './video'
import {login} from './login'
import {home} from './home'
import {request} from './request'

Vue.use(Router)

export default new Router({
  routes: [
    login, home, video, request
  ],
  mode : 'history'
})
