import axios from 'axios'
const api = 'http://13.124.201.59'

export const homeAction = {
  setHomeNowtrend({commit},payload){
    commit('setHomeNowtrend');
    axios.get(api+'/home/nowtrend/'+payload).then(res=>{
      commit('presentHomeNowtrend',res.data.data[0].contents_list)
    })
  }
}


export const searchAction = {
  setSearchResult({commit},payload){
    commit('setSearchResult');
    axios.get(api+'/search/search/'+payload.pageIdx+'/'+payload.searchname+'/'+payload.searchType+'/'+payload.sortType).then(res=>{
      commit('setSearchResultFinish',res.data.data[0].contents_list)
    })
  }
}