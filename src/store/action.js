import axios from 'axios'
const api = 'http://13.124.201.59'

export const homeAction = {
  setHomeNowtrend({
    commit
  }, payload) {
    axios.get(api + '/home/nowtrend/' + payload).then(res => {
      commit('presentHomeNowtrend', res.data.data[0].contents_list.slice(0, 4))
    })
  },
  setRecommend({
    commit
  }) {
    axios.get(api + '/home/recommended/').then(res => {
      // console.log('setRecommend');
      console.log(res.data.data[0].contents_list[0].contentsTitle);
      commit('presentHomeRecommend', res.data.data[0].contents_list)
    })
  },
  setRecent({
    commit
  }, payload) {
    axios.get(api + '/home/recent/' + payload.category + '/' + payload.pageIdx).then(res => {
      commit('presentHomeRecent', res.data.data[0].contents_list);
    })
  },
  setRecentReadMore({
    commit
  }, payload) {
    axios.get(api + '/home/recent/' + payload.category + '/' + payload.pageIdx).then(res => {
      if (res.data.data[0].contents_list.length !== 0) {
        commit('pushRecentReadMore', res.data.data[0].contents_list);
      }
      commit('notReadMore');
      // console.log(res.data.data[0].contents_list.length === 0);
    })
  }
}


export const searchAction = {
  setSearchResult({
    commit
  }, payload) {
    commit('setSearchResult');
    axios.get(api + '/search/search/' + payload.pageIdx + '/' + payload.searchname + '/' + payload.searchType + '/' + payload.sortType).then(res => {
      commit('setSearchResultFinish', res.data.data[0].contents_list)
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

export const libraryAction = {
  setGroupList({commit},payload){
    axios.get(api+'/library/grouplist/'+payload).then(res=>{
      // console.log(res.data.data[0].group_list);
      commit('setMyLibrary',res.data.data[0].group_list);
      commit('setGroupLength',res.data.data[0].group_list);

    })
  },
  setMyRecnetVideo({commit},payload){
    axios.get(api+'/library/recentvideo/'+payload).then(res=>{
      console.log(res.data.data[0].contents_list);
      commit('setMyRecnetVideoResult',res.data.data[0].contents_list);
    })
  }
}