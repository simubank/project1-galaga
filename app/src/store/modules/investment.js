const investment = {
  state: {
    list: [],
    gain: 0,
    isValid: true,
    dialogVisible: false
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
      state.gain = Math.round(gain * 100) / 100
    },
    SET_INVESTMENT_VALID: (state, isValid) => {
      state.isValid = isValid
    },
    CLEAR_INVESTMENT: (state) => {
      state.list = []
      state.gain = 0
      state.isValid = true
    },
    SET_DIALOG: (state, isVisible) => {
      state.dialogVisible = isVisible
    }
  },
  actions: {
    initalizeInvestment({ commit }, option) {
      var investmentOption = {
        id: option.id,
        rate: option.rate,
        percentage: 0
      }
      commit('INITIALIZE_INVESTMENT', investmentOption)
    },

    setInvestment({ commit }, load) {
      commit('SET_INVESTMENT', load)
      var sumPercentage = 0
      var gain = 0
      for (var i = 0; i < this.state.investment.list.length; i++) {
        var item = this.state.investment.list[i]
        sumPercentage += item.percentage
        gain += this.state.netBalance.saving * item.rate / 100 * item.percentage / 100 * 5
      }
      var isValid = Boolean(sumPercentage <= 100)
      commit('SET_INVESTMENT_VALID', isValid)
      commit('SET_GAIN', gain)
    },
    closeInvestmentDialog({ commit }) {
      commit('SET_DIALOG', false)
    },
    openInvestmentDialog({ commit }) {
      commit('SET_DIALOG', true)
    },
    clearInvestment({ commit }) {
      commit('CLEAR_INVESTMENT')
    }
  }
}
export default investment
