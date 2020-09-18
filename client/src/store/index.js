import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'',
    questionList: [],
    randomizedQuestion: []
  },
  mutations: {

    setRandomizedQuestion (state, value){
      state.randomizedQuestion = value;
    },

    setQuestionList (state, value){
      state.questionList= value;
    },

    setPlayerName(state, value){
      state.name = value
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
