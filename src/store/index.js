import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    pushClick: 0,
    pushReceive: 0,
  },
  mutations: {
    addCount(state){
      state.count++
    },
    reduceCount(state){
      state.count--
    },
    handlePushClick(state){
      state.pushClick--
    },
    handlePushReceive(state){
      state.pushReceive--
    }
  }
})

export default store