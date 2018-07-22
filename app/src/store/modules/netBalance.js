function calculateBalance(list, income) {
  var saving = list.reduce((accumulator, currentValue) => {
    return accumulator - currentValue.amount
  }, income)
  return Math.round(saving * 100) / 100
}

function calculateIncome(list) {
  var income = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount
  }, 0)
  return Math.round(income * 100) / 100
}

function converList(list) {
  var returnList = []
  for (var key in list) {
    var obj = {
      category: key,
      amount: Math.round(list[key] * 100) / 100
    }
    returnList.push(obj)
  }
  return returnList
}

function roundNumber(number) {
  return Math.round(number * 100) / 100
}

const netBalance = {

  state: {
    income: 0,
    spending: 0,
    saving: 0,
    isLoading: true,
    spendingList: [],
    incomeList: [],
    originalSpendingList: [],
    originalIncomeList: []
  },

  mutations: {
    SET_NET_SAVING: (state, saving) => {
      state.saving = roundNumber(saving)
    },
    SET_NET_INCOME: (state, income) => {
      state.income = roundNumber(income)
    },
    SET_NET_SPENDING: (state, spending) => {
      state.spending = roundNumber(spending)
    },
    SET_SPENDING_LIST: (state, list) => {
      state.spendingList = list.map(item => {
        return {
          category: item.category,
          amount: roundNumber(item.amount)
        }
      })
    },
    SET_ORIGINAL_SPENDING_LIST: (state, list) => {
      state.originalSpendingList = list.map(item => {
        return {
          category: item.category,
          amount: roundNumber(item.amount)
        }
      })
    },
    SET_IS_LOADING: (state) => {
      state.isLoading = false
    },
    SET_INCOME_LIST: (state, list) => {
      state.incomeList = list.map(item => {
        return {
          category: item.category,
          amount: roundNumber(item.amount)
        }
      })
    },
    SET_ORIGINAL_INCOME_LIST: (state, list) => {
      state.originalIncomeList = list.map(item => {
        return {
          category: item.category,
          amount: roundNumber(item.amount)
        }
      })
    }
  },
  actions: {
    updateIncome({ commit }, list) {
      var income = calculateIncome(list)
      commit('SET_NET_INCOME', income)
      commit('SET_INCOME_LIST', list)
      commit('SET_NET_SAVING', income - this.state.netBalance.spending)
    },

    updateNetBalance({ commit }, list) {
      var totalSaving = calculateBalance(list, this.state.netBalance.income)
      commit('SET_NET_SAVING', totalSaving)
      commit('SET_NET_SPENDING', this.state.netBalance.income - totalSaving)
      commit('SET_SPENDING_LIST', list)
    },

    resetNetBalance({ commit }) {
      var totalIncome = calculateIncome(this.state.netBalance.originalIncomeList)
      var totalSaving = calculateBalance(this.state.netBalance.originalSpendingList, totalIncome)
      commit('SET_SPENDING_LIST', this.state.netBalance.originalSpendingList)
      commit('SET_INCOME_LIST', this.state.netBalance.originalIncomeList)
      commit('SET_NET_SAVING', totalSaving)
      commit('SET_NET_INCOME', totalIncome)
      commit('SET_NET_SPENDING', totalIncome - totalSaving)
    },

    initalizeBalance({ commit }, load) {
      var incomeList = converList(load.incomeCategory)
      commit('SET_INCOME_LIST', incomeList)
      commit('SET_ORIGINAL_INCOME_LIST', incomeList)

      var spendingList = converList(load.expenseCategory)
      commit('SET_SPENDING_LIST', spendingList)
      commit('SET_ORIGINAL_SPENDING_LIST', spendingList)

      commit('SET_NET_INCOME', load.netIncome)
      commit('SET_NET_SAVING', load.netBalance)
      commit('SET_NET_SPENDING', load.netSpending)
      commit('SET_IS_LOADING')
    },

    clearNetBalance({ commit }) {
      commit('SET_NET_SAVING', 0)
      commit('SET_NET_INCOME', 0)
      commit('SET_NET_SPENDING', 0)
      commit('SET_SPENDING_LIST', [])
      commit('SET_ORIGINAL_SPENDING_LIST', [])
      commit('SET_INCOME_LIST', [])
      commit('SET_ORIGINAL_INCOME_LIST', [])
    }
  }
}

export default netBalance
