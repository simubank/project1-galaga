const netBalance = {

  state: {
    saving: 0,
    income: 0,
    spending: 0
  },

  mutations: {
    SET_NET_SAVING: (state, saving) => {
      state.saving = saving
    },
    SET_NET_INCOME: (state, income) => {
      state.income = income
    },
    SET_NET_SPENDING: (state, spending) => {
      state.spending = spending
    }
  },
  actions: {
    setNetBalance({ commit }, balance) {
      commit('SET_NET_SAVING', balance.netSaving)
      commit('SET_NET_INCOME', balance.netIncome)
      commit('SET_NET_SPENDING', balance.netSpending)
    },

    clearNetBalance({ commit }) {
      commit('SET_NET_SAVING', 0)
      commit('SET_NET_INCOME', 0)
      commit('SET_NET_SPENDING', 0)
    }
  }
}

export default netBalance
