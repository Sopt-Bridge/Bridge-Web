import Vue from "vue";
import Vuex from "vuex";

import {
  homeState,
  searchState,
  requestState,
  commentState,
  replyState,
  libarayState,
  subscribeState,
  contentsState
} from "./state.js";
import {
  homeGetters,
  searchGetters,
  requestGetters,
  commentGetters,
  replyGetters,
  libraryGetters,
  subscribeGetters,
  contentsGetters
} from "./getter.js";
import {
  homeMutations,
  searchMutations,
  requestMutations,
  commentMutations,
  replyMutations,
  libraryMutatoins,
  subscribeMutations,
  contentsMutation
} from "./mutation.js";
import {
  homeAction,
  searchAction,
  requestAction,
  commentAction,
  replyAction,
  libraryAction,
  subscribeAction,
  contentsAction
} from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState, commentState, replyState, libarayState, subscribeState, contentsState),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters, commentGetters, replyGetters, libraryGetters, subscribeGetters, contentsGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations, commentMutations, replyMutations, libraryMutatoins, subscribeMutations, contentsMutation),
  actions: Object.assign({}, homeAction, searchAction, requestAction, commentAction, replyAction, libraryAction, subscribeAction, contentsAction)

});