export const homeGetters = {
  homeNowTrendItem(state) {
    return state.nowTrend
  },
  homeRecommendItem(state) {
    return state.recommend
  },
  homeRecentItem(state) {
    return state.recent
  }
}

export const searchGetters = {
  getSearchResult(state){
    return state.searchResult
  }
}

export const requestGetters = {
  getRequestResult(state){
    return state.requestResult
  },
  getRequestSearchResult(state){
    return state.requestResult
  }
}

export const commentGetters = {
  getCommentResult(state){
    return state.commentResult
  }
}

export const replyGetters = {
  getReplyResult(state){
    return state.replyResult
  }
}

export const libraryGetters = {
  getGroupList(state){
    return state.groupList;
  },
  getGroupLength(state){
    return state.groupLength;
  },
  getMyRecentVideo(state){
    return state.myRecnetVideo
  }
}

export const subscribeGetters = {
  getHashlist(state){
    return state.myHashlist;
  },
  getHashContentlist(state){
    return state.hashContentlist;
  }
}