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