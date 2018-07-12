export const homeMutations = {
  getHomeNowtrend(state,payload){
    console.log('getHomeNowtrend');
  },
  presentHomeNowtrend(state,payload){
    state.nowTrend = payload
    console.log(payload);
  }
}

export const searchMutations = {
  setSearchResult(state, payload){
    console.log('set search result start');
  },
  setSearchResultFinish(state, payload){
    state.result = payload;
    console.log(payload);
  }
}

export const requestMutations = {
  setRequestResult(state, payload){
    console.log('set request result start');
  },
  setRequestResultFinish(state, payload){
    state.result = payload;
    console.log("set request result finish!");
  },
  setRequestSearchResult(state, payload){
    console.log("set request search result start!");
  },
  setRequestSearchResultFinish(state, payload){
    state.result = payload;
    console.log("set request search result finish!");
  }
}