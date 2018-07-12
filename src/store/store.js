import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState, requestState } from "./state.js";
import { homeGetters, searchGetters, requestGetters } from "./getter.js";
import { homeMutations, searchMutations, requestMutations } from "./mutation.js";
import { homeAction, searchAction, requestAction } from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations),
  actions: Object.assign({}, homeAction, searchAction, requestAction)
});
