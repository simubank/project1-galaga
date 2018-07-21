function calculateBalance(list, income) {
  var saving = list.reduce((accumulator, currentValue) => {
    return accumulator - currentValue.amount
  }, income)
  return Math.round(saving * 100) / 100
}
const netBalance = {

  state: {
    income: 0,
    spending: 0,
    saving: 0,
    isLoading: true,
    list: [],
    originalList: []
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
    SET_SPENDING_LIST: (state, list) => {
      state.list = list.map(item => {
        return {
          category: item.category,
          amount: item.amount
        }
      })
    },
    SET_ORIGINAL_SPENDING_LIST: (state, list) => {
      state.originalList = list.map(item => {
        return {
          category: item.category,
          amount: item.amount
        }
      })
    },
    SET_IS_LOADING: (state) => {
      state.isLoading = false
    }
  },
  actions: {
    setNetBalance({ commit }, balance) {
      commit('SET_NET_SAVING', balance.netSaving)
      commit('SET_NET_INCOME', balance.netIncome)
      commit('SET_NET_SPENDING', balance.netSpending)
    },

    setNetIncome({ commit }, income) {
      commit('SET_NET_INCOME', income)
    },

    updateNetBalance({ commit }, list) {
      var totalSaving = calculateBalance(list, this.state.netBalance.income)
      commit('SET_NET_SAVING', totalSaving)
      commit('SET_NET_SPENDING', this.state.netBalance.income - totalSaving)
      commit('SET_SPENDING_LIST', list)
    },

    setOriginalSpendingList({ commit }, list) {
      commit('SET_ORIGINAL_SPENDING_LIST', list)
      commit('SET_SPENDING_LIST', list)
      commit('SET_IS_LOADING')
    },

    resetNetBalance({ commit }) {
      var totalSaving = calculateBalance(this.state.netBalance.originalList, this.state.netBalance.income)
      commit('SET_SPENDING_LIST', this.state.netBalance.originalList)
      commit('SET_NET_SAVING', totalSaving)
      commit('SET_NET_SPENDING', this.state.netBalance.income - totalSaving)
      commit('SET_SPENDING_LIST', this.state.netBalance.originalList)
    },

    clearNetBalance({ commit }) {
      commit('SET_NET_SAVING', 0)
      commit('SET_NET_INCOME', 0)
      commit('SET_NET_SPENDING', 0)
      commit('SET_SPENDING_LIST', [])
      commit('SET_ORIGINAL_SPENDING_LIST', [])
    }
  }
}

export default netBalance
