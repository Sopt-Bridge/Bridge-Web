import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState, requestState, commentState, replyState ,libarayState,subscribeState, writeState } from "./state.js";
import { homeGetters, searchGetters, requestGetters ,commentGetters, replyGetters ,libraryGetters,subscribeGetters, writeGetters} from "./getter.js";
import { homeMutations, searchMutations, requestMutations,commentMutations, replyMutations , libraryMutatoins ,subscribeMutations, writeMutations} from "./mutation.js";
import { homeAction, searchAction, requestAction,commentAction,replyAction,libraryAction ,subscribeAction, writeAction} from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState, commentState, replyState ,libarayState,subscribeState, writeState ),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters ,commentGetters, replyGetters ,libraryGetters,subscribeGetters, writeGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations,commentMutations, replyMutations , libraryMutatoins ,subscribeMutations, writeMutations),
  actions: Object.assign({},  homeAction, searchAction, requestAction,commentAction,replyAction,libraryAction ,subscribeAction, writeAction)
  
});
