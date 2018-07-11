import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState } from "./state.js";
import { homeGetters, searchGetters } from "./getter.js";
import { homeMutations, searchMutations } from "./mutation.js";
import { homeAction, searchAction } from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState),
  getters: Object.assign({}, homeGetters, searchGetters),
  mutations: Object.assign({}, homeMutations, searchMutations),
  actions: Object.assign({}, homeAction, searchAction)
});
