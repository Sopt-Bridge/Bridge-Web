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
    console.log('pushReadMore');
    console.log(payload);
    state.recent = state.recent.concat(payload);
  },
  notReadMore(state){
    // console.log('notReadMore')
  }
}
export const searchMutations = {
  setSearchResult(state, payload) {
    console.log("set search result start");
  },
  setSearchResultFinish(state, payload) {
    state.searchResult = payload;
    // console.log(payload);
  }
};

export const requestMutations = {
  setRequestResult(state, payload) {
    console.log("set request result start");
  },
  setRequestResultFinish(state, payload) {
    state.requestResult = payload;
    console.log("set request result finish!");
  },
  setRequestSearchResult(state, payload) {
    console.log("set request search result start!");
  },
  setRequestSearchResultFinish(state, payload) {
    state.requestResult = payload;
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
  },
  setrecommendHashList(state, payload){
    state.recommendHashList = payload;
  }
}


export const commentMutations = {
  setCommentResult(state, payload) {
    console.log("set comment result start!");
  },
  setCommentResultFinish(state, payload) {
    state.commentResult = payload;
    console.log("set comment result finish!");
  }
};

export const replyMutations = {
  setReplyResult(state, payload) {
    console.log("set reply result start!");
  },
  setReplyResultFinish(state, payload) {
    state.replyResult = payload;
    console.log("set reply result finish!");
  }
};


export const contentsMutation = {
  setContents(state,payload){
    state.contents = payload;
  },
  setNextContents(state,payload){
    state.nextContents = payload;
  }
}

export const writeMutations = {
  setWriteResult(state, payload) {
    console.log("set write result start!");
  },
  setWriteResultFinish(state, payload) {
    state.writeResult = payload;
    console.log("set write result finish!");
  },
  setWriteSearchResult(state, payload) {
    console.log("set write result start!");
  },
  setWriteSearchResultFinish(state, payload) {
    state.writeResult = payload;
    console.log("set write result finish!");
  }
};

