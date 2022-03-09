import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList: [1],
    topSong: [],
  },
  mutations: {
    getDatass(state, payload) {
      state.dataList = payload;
    },
    getTopSong(state, payload) {
      state.topSong = payload;
    },
  },
  actions: {},
  module: {},
});
