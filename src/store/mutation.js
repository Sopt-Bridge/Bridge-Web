export const homeMutations = {
  presentHomeNowtrend(state,payload){
    state.nowTrend = payload
    // console.log(payload);
  },
  presentHomeRecommend(state,payload){
    state.recommend = payload
  },
  presentHomeRecent(state,payload){
    state.recent = payload
    // console.log(payload);
  },
  pushRecentReadMore(state,payload){
    state.recent.push(payload);
  },
  notReadMore(state){
    // console.log('notReadMore')
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