import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    questionList: [],
    randomizedQuestion: []
  },
  mutations: {
    setToPlayers (state, value) {
      state.players = value
    },

    setRandomizedQuestion (state, value){
      state.randomizedQuestion = value;
    },

    setQuestionList (state, value){
      state.questionList= value;
    }
  },
  actions: {
    SOCKET_fetchPlayers (context, payload) {
      context.commit('setToPlayers', payload)
      console.log('dari store', payload)
    }
  },
  modules: {
  }
})
