import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
    currentUser: {},
    chats: []
  },
  mutations: {
    SET_CONTACTS(state, payload) {
      state.contacts = payload
    },
    GET_USER_ID(state, payload) {
      if(payload) {
        state.currentUser = payload
      } else {
        state.currentUser = ''
      }
    },
    FETCH_CHATS(state, payload) {
        state.chats = payload
    }
  },
  actions: {
     FETCH_CONTACTS({commit}) {
        axios.get('http://localhost:3000/contacts')
            .then(res => {
              commit('SET_CONTACTS', res.data)
            })
    },
    GET_USER_ID({commit}, payload) {
       commit('GET_USER_ID', payload)
    },
    FETCH_CHATS({commit}) {
       return axios.get('http://localhost:3000/chats')
           .then(res => {
             commit('FETCH_CHATS', res.data)
           })
    },
      SET_MESSAGES_TO_CHAT({commit}, {userId, chat}) {
         return axios.put('http://localhost:3000/chats/' + userId, chat)
             .then(res => {
                 return res
             })
      }
  },
  modules: {}
});
