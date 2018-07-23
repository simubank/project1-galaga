const fundList = {

  state: {
    list: [],
    risk: '',
    low: [5, 2, 3],
    medium: [6410, 2100, 11],
    high: [1791, 24, 422]
  },

  mutations: {
    SET_LIST: (state, risk) => {
      switch (risk) {
        case 'low':
          state.list = state.low
          break
        case 'medium':
          state.list = state.medium
          break
        case 'high':
          state.list = state.high
          break
        case 'all':
          state.list = state.high.concat(state.medium).concat(state.low)
          break
        default:
          state.list = []
      }
    },
    CLEAR_LIST: (state) => {
      state.list = []
      state.risk = ''
    },
    SET_RISK: (state, risk) => {
      state.risk = risk
    }
  },
  actions: {
    setFundList({ commit }, risk) {
      commit('SET_LIST', risk)
    },
    setUserRisk({ commit }, risk) {
      commit('SET_RISK', risk)
    },
    clearFundList({ commit }) {
      commit('CLEAR_LIST')
    }
  }
}

export default fundList
