export default {
   renewalState(state, payload) {
      state.searchNickname = payload.search;
   },
   requestResponse(state, payload) {
      state.arrDataGitApi = payload;
   },   
}