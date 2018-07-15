const netBalance = {

  state: {
    income: 0,
    spending: 0,
    saving: 0,
    goalSpending: 0,
    goalSaving: 0
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
    },
    SET_GOAL_SAVING: (state, saving) => {
      state.goalSaving = saving
    },
    SET_GOAL_SPENDING: (state, spending) => {
      state.goalSpending = spending
    }
  },
  actions: {
    setNetBalance({ commit }, balance) {
      commit('SET_NET_SAVING', balance.netSaving)
      commit('SET_NET_INCOME', balance.netIncome)
      commit('SET_NET_SPENDING', balance.netSpending)
    },

    setGoalBalance({ commit }, balance) {
      commit('SET_GOAL_SAVING', balance.goalSaving)
      commit('SET_GOAL_SPENDING', balance.goalSpending)
    },

    clearNetBalance({ commit }) {
      commit('SET_NET_SAVING', 0)
      commit('SET_NET_INCOME', 0)
      commit('SET_NET_SPENDING', 0)
      commit('SET_GOAL_SAVING', 0)
      commit('SET_GOAL_SPENDING', 0)
    }
  }
}

export default netBalance
