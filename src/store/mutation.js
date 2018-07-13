export const homeMutations = {
  getHomeNowtrend(state, payload) {
    console.log("getHomeNowtrend");
  },
  presentHomeNowtrend(state, payload) {
    state.nowTrend = payload;
    console.log(payload);
  }
};

export const searchMutations = {
  setSearchResult(state, payload) {
    console.log("set search result start");
  },
  setSearchResultFinish(state, payload) {
    state.searchResult = payload;
    console.log(payload);
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
};

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
