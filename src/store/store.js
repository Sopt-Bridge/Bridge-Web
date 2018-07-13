import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import {
  homeState,
  searchState,
  requestState,
  commentState,
  replyState,
  libarayState,
  subscribeState,
  contentsState,
  writeState, searchTraceState
} from "./state.js";
import {
  homeGetters,
  searchGetters,
  requestGetters,
  commentGetters,
  replyGetters,
  libraryGetters,
  subscribeGetters,
  contentsGetters,writeGetters, searchTraceGetters
} from "./getter.js";
import {
  homeMutations,
  searchMutations,
  requestMutations,
  commentMutations,
  replyMutations,
  libraryMutatoins,
  subscribeMutations,
  contentsMutation,writeMutations, searchTraceMutations
} from "./mutation.js";
import {
  homeAction,
  searchAction,
  requestAction,
  commentAction,
  replyAction,
  libraryAction,
  subscribeAction,
  contentsAction,writeAction, searchTraceAction
} from "./action.js";


Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState, commentState, replyState, libarayState, subscribeState, contentsState, writeState, searchTraceState),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters, commentGetters, replyGetters, libraryGetters, subscribeGetters, contentsGetters,writeGetters, searchTraceGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations, commentMutations, replyMutations, libraryMutatoins, subscribeMutations, contentsMutation,writeMutations, searchTraceMutations),
  actions: Object.assign({}, homeAction, searchAction, requestAction, commentAction, replyAction, libraryAction, subscribeAction, contentsAction,writeAction, searchTraceAction),
    plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3 /*, secure: true  https사용시에만!*/ }),
        removeItem: key => Cookies.remove(key)
      }
    })
]

});
