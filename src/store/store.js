import Vue from "vue";
import Vuex from "vuex";

import { homeState, searchState, requestState,libarayState } from "./state.js";
import { homeGetters, searchGetters, requestGetters ,libraryGetters} from "./getter.js";
import { homeMutations, searchMutations, requestMutations, libraryMutatoins } from "./mutation.js";
import { homeAction, searchAction, requestAction,libraryAction } from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState,libarayState),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters,libraryGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations,libraryMutatoins),
  actions: Object.assign({}, homeAction, searchAction, requestAction,libraryAction)
});
