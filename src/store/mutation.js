export const homeMutations = {
  getHomeNowtrend(state,payload){
    console.log('getHomeNowtrend');
  },
  presentHomeNowtrend(state,payload){
    state.nowTrend = payload
    console.log(payload);
  }
}