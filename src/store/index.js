import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: []
  },
  mutations: {
    SET_USERS(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async FETCH_DATA({commit}) {
        axios.get('l')
        commit('SET_USERS', res)
    }
  },
  modules: {}
});
