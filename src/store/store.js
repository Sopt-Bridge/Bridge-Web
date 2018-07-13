import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
import { homeState, searchState, requestState, commentState, replyState ,libarayState,subscribeState, writeState, searchTraceState } from "./state.js";
import { homeGetters, searchGetters, requestGetters ,commentGetters, replyGetters ,libraryGetters,subscribeGetters, writeGetters, searchTraceGetters} from "./getter.js";
import { homeMutations, searchMutations, requestMutations,commentMutations, replyMutations , libraryMutatoins ,subscribeMutations, writeMutations, searchTraceMutations} from "./mutation.js";
import { homeAction, searchAction, requestAction,commentAction,replyAction,libraryAction ,subscribeAction, writeAction, searchTraceAction} from "./action.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: Object.assign({}, homeState, searchState, requestState, commentState, replyState ,libarayState,subscribeState, writeState, searchTraceState),
  getters: Object.assign({}, homeGetters, searchGetters, requestGetters ,commentGetters, replyGetters ,libraryGetters,subscribeGetters, writeGetters, searchTraceGetters),
  mutations: Object.assign({}, homeMutations, searchMutations, requestMutations,commentMutations, replyMutations , libraryMutatoins ,subscribeMutations, writeMutations, searchTraceMutations),
  actions: Object.assign({},  homeAction, searchAction, requestAction,commentAction,replyAction,libraryAction ,subscribeAction, writeAction, searchTraceAction),
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
