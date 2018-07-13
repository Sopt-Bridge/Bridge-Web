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
  contentsState,
  writeState
} from "./state.js";
import {
  homeGetters,
  searchGetters,
  requestGetters,
  commentGetters,
  replyGetters,
  libraryGetters,
  subscribeGetters,
  contentsGetters,writeGetters
} from "./getter.js";
import {
  homeMutations,
  searchMutations,
  requestMutations,
  commentMutations,
  replyMutations,
  libraryMutatoins,
  subscribeMutations,
  contentsMutation,writeMutations
} from "./mutation.js";
import {
  homeAction,
  searchAction,
  requestAction,
  commentAction,
  replyAction,
  libraryAction,
  subscribeAction,
  contentsAction,writeAction
} from "./action.js";


Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState, commentState, replyState, libarayState, subscribeState, contentsState, writeState),

  getters: Object.assign({}, homeGetters, searchGetters, requestGetters, commentGetters, replyGetters, libraryGetters, subscribeGetters, contentsGetters,writeGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations, commentMutations, replyMutations, libraryMutatoins, subscribeMutations, contentsMutation,writeMutations),
  actions: Object.assign({}, homeAction, searchAction, requestAction, commentAction, replyAction, libraryAction, subscribeAction, contentsAction,writeAction)


});
