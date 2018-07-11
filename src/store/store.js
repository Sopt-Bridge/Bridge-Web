import Vue from 'vue'
import Vuex from 'vuex'

import {
  homeState
} from './state.js'
import {
  homeGetters
} from './getter.js'
import {
  homeMutations
} from './mutation.js'
import {
  homeAction
} from './action.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState),
  getters: Object.assign({}, homeGetters),
  mutations: Object.assign({},homeMutations),
  actions: Object.assign({}, homeAction)
})