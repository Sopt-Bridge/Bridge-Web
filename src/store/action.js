import axios from 'axios'
const api = 'http://13.124.201.59'

export const homeAction = {
  getHomeNowtrend({commit},payload){
    commit('getHomeNowtrend');
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

export const requestAction = {
  setRequestResult({commit}){
    commit('setRequestResult');
    axios.get(api+'/trequest/trequest_listview/0').then(res=>{
      commit('setRequestResultFinish',res.data.data[0].request_list)
    })
  },
  setRequestSearchResult({commit}, payload){
    commit('setRequestSearchResult');
    axios.get(api+'/trequest/trequest_search/'+payload).then(res=>{
      commit('setRequestSearchResultFinish',res.data.data[0].request_list)
    })
  }
}