// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//Vuetify setting
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

//Global Components
import Global from '@/components/index.js'

// Swiper setting
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// axios setting
import axios from 'axios'
Vue.prototype.$http = axios;

// vuex setting
// import Vuex from 'vuex'
// Vue.use(Vuex);
import store from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    Global
  },
  template: '<App/>'
})