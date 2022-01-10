import { createStore } from 'vuex'

export default createStore({
  state: {
    num: 0,
    users: [
      {name: 'jack', age: 10},
      {name: 'lucy', age: 18},
    ]
  },
  getters: {
    compareNum: state => {
      return state.num > 10;
    },
    getUserByAge: state => age => {
      return state.users.filter(user => user.age > 10);
    }
  },
  mutations: {
    setNUm(state, payload) {
      state.num = payload;
    },
    decreaseNum(state, payload) {
      state.num -= payload;
    }
  },
  actions: {
    decreaseNumAsync({ commit }, payload) {
      setTimeout(() => {
        commit('decreaseNum', payload);
      })
    }
  },
  modules: {
  }
})
