import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState, requestState, commentState, replyState } from "./state.js";
import { homeGetters, searchGetters, requestGetters, commentGetters, replyGetters } from "./getter.js";
import { homeMutations, searchMutations, requestMutations, commentMutations, replyMutations } from "./mutation.js";
import { homeAction, searchAction, requestAction, commentAction, replyAction } from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState, commentState, replyState),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters, commentGetters, replyGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations, commentMutations, replyMutations),
  actions: Object.assign({}, homeAction, searchAction, requestAction, commentAction, replyAction)
});
