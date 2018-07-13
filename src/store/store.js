import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState, requestState, commentState, replyState ,libarayState,subscribeState } from "./state.js";
import { homeGetters, searchGetters, requestGetters ,commentGetters, replyGetters ,libraryGetters,subscribeGetters} from "./getter.js";
import { homeMutations, searchMutations, requestMutations,commentMutations, replyMutations , libraryMutatoins ,subscribeMutations} from "./mutation.js";
import { homeAction, searchAction, requestAction,commentAction,replyAction,libraryAction ,subscribeAction} from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState,libarayState,subscribeState, commentState, replyState ),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters,libraryGetters,subscribeGetters,commentState, replyState),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations,libraryMutatoins,subscribeMutations,commentMutations, replyMutations),
  actions: Object.assign({}, homeAction, searchAction, requestAction,libraryAction,subscribeAction,commentAction, replyAction)
  
});
