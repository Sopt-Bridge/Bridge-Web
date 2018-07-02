import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import VideoContent from '@/pages/VideoContens.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },{
      path:'/video',
      name:'video',
      component:VideoContent
    }
  ],
  mode : 'history'
})
