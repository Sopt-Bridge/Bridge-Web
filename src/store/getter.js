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
  },
  getrecommendHashList(state){
    return state.recommendHashLIst;
  }
}

export const contentsGetters = {
  getContents(state){
    return state.contents;
  },
  getNextContents(state){
    return state.nextContents;
  }
}

export const writeGetters = {
  getWriteResult(state){
    return state.writeResult
  },
  getWriteSearchResult(state){
    return state.requestResult
  }
}


