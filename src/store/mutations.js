export default {
   renewalState(state, payload) {
      state.name = payload.search;
   },
   requestResponse(state, payload) {
      state.requestData = payload;
   },   
}