import Vue from 'vue'
import Router from 'vue-router'

import {video} from './video'
import {login} from './login'
import {home} from './home'
import {RequestDetail,RequestMain,RequestWrite} from './request'
import {subscribe} from './subscribe'
import {myPage} from './myPage'


Vue.use(Router)

export default new Router({
  routes: [
    login, home, video, RequestMain,RequestWrite,RequestDetail,subscribe,myPage
  ],
  mode : 'history'
})
