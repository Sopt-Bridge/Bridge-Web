import axios from "axios";
const api = "http://13.124.201.59";

export const homeAction = {
  setHomeNowtrend({ commit }, payload) {
    axios.get(api + "/home/nowtrend/" + payload).then(res => {
      commit("presentHomeNowtrend", res.data.data[0].contents_list);
    });
  }
};

export const searchAction = {
  setSearchResult({ commit }, payload) {
    commit("setSearchResult");
    axios
      .get(
        api +
          "/search/search/" +
          payload.pageIdx +
          "/" +
          payload.searchname +
          "/" +
          payload.searchType +
          "/" +
          payload.sortType
      )
      .then(res => {
        commit("setSearchResultFinish", res.data.data[0].contents_list);
      });
  }
};

export const requestAction = {
  setRequestResult({ commit }) {
    commit("setRequestResult");
    axios.get(api + "/trequest/trequest_listview/0").then(res => {
      commit("setRequestResultFinish", res.data.data[0].request_list);
    });
  },
  setRequestSearchResult({ commit }, payload) {
    commit("setRequestSearchResult");
    axios.get(api + "/trequest/trequest_search/" + payload).then(res => {
      commit("setRequestSearchResultFinish", res.data.data[0].request_list);
    });
  }
};

export const commentAction = {
  setCommentResult({ commit }, payload) {
    commit("setCommentResult");
    axios
      .get(api + "/trequest/trequestcomment_view/" + payload + "/0")
      .then(res => {
        // console.log(res.data.data[0].request_comment_list);
        commit("setCommentResultFinish", res.data.data[0].request_comment_list);
      });
  }
};

export const replyAction = {
  setReplyResult({ commit }, payload) {
    commit("setReplyResult");
    axios
      .get(api + "/trequest/trequestrecomment_view/" + String(payload) + "/0")
      .then(res => {
        console.log(res.data.data[0].request_recomment_list);
        commit("setReplyResultFinish", res.data.data[0].request_recomment_list);
      });
  }
};

