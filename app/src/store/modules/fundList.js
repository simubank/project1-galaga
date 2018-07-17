const fundList = {

  state: {
    list: []
  },

  mutations: {
    SET_LIST: (state, risk) => {
      switch (risk) {
        case 'low':
          state.list = [1, 2, 3]
          break
        case 'medium':
          state.list = [4, 5, 6]
          break
        case 'high':
          state.list = [7, 8, 9]
          break
        default:
          state.list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    CLEAR_LIST: (state) => {
      state.list = []
    }
  },
  actions: {
    setFundList({ commit }, risk) {
      commit('SET_LIST', risk)
    },
    clearFundList({ commit }) {
      commit('CLEAR_LIST')
    }
  }
}

export default fundList
