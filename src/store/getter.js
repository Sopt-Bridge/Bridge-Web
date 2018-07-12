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