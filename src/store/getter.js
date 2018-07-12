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
  getSearchResult(state) {
    return state.result
  }
}

export const requestGetters = {
  getRequestResult(state){
    return state.result
  },
  getRequestSearchResult(state){
    return state.result
  }
}