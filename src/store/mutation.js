export const homeMutations = {
  setHomeNowtrend(state,payload){
    console.log('setHomeNowtrend');
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