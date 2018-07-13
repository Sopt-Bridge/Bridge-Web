import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState, requestState,libarayState,subscribeState } from "./state.js";
import { homeGetters, searchGetters, requestGetters ,libraryGetters,subscribeGetters} from "./getter.js";
import { homeMutations, searchMutations, requestMutations, libraryMutatoins ,subscribeMutations} from "./mutation.js";
import { homeAction, searchAction, requestAction,libraryAction ,subscribeAction} from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState,libarayState,subscribeState),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters,libraryGetters,subscribeGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations,libraryMutatoins,subscribeMutations),
  actions: Object.assign({}, homeAction, searchAction, requestAction,libraryAction,subscribeAction)
});
