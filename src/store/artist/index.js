const state = {
  dataList: [1],
};
const mutations = {
  getData(state, list) {
    state.dataList = list;
  },
};
const actions = {
  //获取服务器
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
