import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState, requestState, commentState, replyState ,libarayState,subscribeState } from "./state.js";
import { homeGetters, searchGetters, requestGetters ,commentGetters, replyGetters ,libraryGetters,subscribeGetters} from "./getter.js";
import { homeMutations, searchMutations, requestMutations,commentMutations, replyMutations , libraryMutatoins ,subscribeMutations} from "./mutation.js";
import { homeAction, searchAction, requestAction,commentAction,replyAction,libraryAction ,subscribeAction} from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState, commentState, replyState ,libarayState,subscribeState ),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters ,commentGetters, replyGetters ,libraryGetters,subscribeGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations,commentMutations, replyMutations , libraryMutatoins ,subscribeMutations),
  actions: Object.assign({},  homeAction, searchAction, requestAction,commentAction,replyAction,libraryAction ,subscribeAction)
  
});
