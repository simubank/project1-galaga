function roundNumber(number) {
  return Math.round(number * 100) / 100
}

const investment = {
  state: {
    list: [],
    gain: { Yr1: 0, Yr5: 0 },
    isValid: true,
    dialogVisible: false,
    errorDialogVisible: false,
    totalContribution: 0
  },
  mutations: {
    INITIALIZE_INVESTMENT: (state, investment) => {
      state.list.push(investment)
    },
    SET_INVESTMENT: (state, load) => {
      for (var i = 0; i < state.list.length; i++) {
        if (state.list[i].id === load.id) {
          state.list[i].percentage = load.percentage
        }
      }
    },
    SET_GAIN: (state, gain) => {
      state.gain.Yr1 = roundNumber(gain.Yr1)
      state.gain.Yr5 = roundNumber(gain.Yr5)
    },
    SET_INVESTMENT_VALID: (state, isValid) => {
      state.isValid = isValid
    },
    SET_CONTRIBUTION: (state, contribution) => {
      state.totalContribution = contribution
    },
    CLEAR_INVESTMENT: (state) => {
      state.list = []
      state.gain = { Yr1: 0, Yr5: 0 }
      state.isValid = true
      state.dialogVisible = false
      state.errorDialogVisible = false
      state.totalContribution = 0
    },
    SET_DIALOG: (state, isVisible) => {
      state.dialogVisible = isVisible
    },
    SET_ERROR_DIALOG: (state, isVisible) => {
      state.errorDialogVisible = isVisible
    },
    RESET_INVESTMENT: (state) => {
      for (var i = 0; i < state.list.length; i++) {
        state.list[i].percentage = 0
      }
      state.gain = { Yr1: 0, Yr5: 0 }
      state.isValid = true
      state.dialogVisible = false
      state.errorDialogVisible = false
      state.totalContribution = 0
      console.log('reset')
    }
  },
  actions: {
    initalizeInvestment({ commit }, option) {
      var investmentOption = {
        id: option.id,
        rate: {
          Yr1: option.rate.Yr1,
          Yr5: option.rate.Yr5
        },
        percentage: 0
      }
      commit('INITIALIZE_INVESTMENT', investmentOption)
    },

    setInvestment({ commit }, load) {
      commit('SET_INVESTMENT', load)
      var sumPercentage = 0
      var gain = {
        Yr1: 0,
        Yr5: 0
      }
      for (var i = 0; i < this.state.investment.list.length; i++) {
        var item = this.state.investment.list[i]
        sumPercentage += item.percentage
        gain.Yr1 += this.state.netBalance.saving * item.rate.Yr1 / 100 * item.percentage / 100
        gain.Yr5 += this.state.netBalance.saving * item.rate.Yr5 / 100 * item.percentage / 100 * 5
      }
      var isValid = Boolean(sumPercentage <= 100)
      commit('SET_INVESTMENT_VALID', isValid)
      commit('SET_GAIN', gain)
      commit('SET_CONTRIBUTION', sumPercentage)
    },
    closeInvestmentDialog({ commit }) {
      commit('SET_DIALOG', false)
      commit('SET_ERROR_DIALOG', false)
    },
    openInvestmentDialog({ commit }) {
      console.log(this.state.investment)
      if (this.state.investment.isValid) {
        commit('SET_DIALOG', true)
        commit('SET_ERROR_DIALOG', false)
      } else {
        commit('SET_ERROR_DIALOG', true)
        commit('SET_DIALOG', false)
      }
    },
    clearInvestment({ commit }) {
      commit('CLEAR_INVESTMENT')
    },
    resetInvestment({ commit }) {
      commit('RESET_INVESTMENT')
    }
  }
}
export default investment
