const fundList = {

  state: {
    list: [],
    risk: '',
    invenstmentBeginDialogOpen: false
  },

  mutations: {
    SET_LIST: (state, risk) => {
      switch (risk) {
        case 'low':
          state.list = [5, 2, 3]
          break
        case 'medium':
          state.list = [6410, 2100, 11]
          break
        case 'high':
          state.list = [6877, 24, 422]
          break
        case 'all':
          state.list = [5, 2, 3, 6410, 2100, 11, 6877, 24, 422]
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
    },
    SET_DIALOG: (state, isOpen) => {
      state.invenstmentBeginDialogOpen = isOpen
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
    },
    setInvestmentBeginDialog({ commit }, isOpen) {
      commit('SET_DIALOG', isOpen)
    }
  }
}

export default fundList
