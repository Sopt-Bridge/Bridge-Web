export const homeGetters = {
  homeNowTrendItem(state){
    return state.nowTrend
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