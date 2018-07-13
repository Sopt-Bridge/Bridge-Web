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

export const libraryMutatoins = {
  setMyLibrary(state,payload){
    state.groupList = payload;
  },
  setGroupLength(state,payload){
    state.groupLength = payload.length;
  },
  setMyRecnetVideoResult(state,payload){
    state.myRecnetVideo = payload;
  },

}

export const subscribeMutations = {
  setHashlist(state,payload){
    state.myHashlist = payload;
  },
  setHashContentlist(state,payload){
    console.log('setHashContentlist..........');
    state.hashContentlist = payload
  }
}