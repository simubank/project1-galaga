const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  customerID: state => state.user.customerID,
  avatar: state => state.user.avatar,
  username: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  netIncome: state => state.netBalance.income,
  netSaving: state => state.netBalance.saving,
  netSpending: state => state.netBalance.spending,
  netSpendingList: state => state.netBalance.spendingList,
  netIncomeList: state => state.netBalance.incomeList,
  fundList: state => state.fundList.list,
  listLoading: state => state.netBalance.isLoading,
  investmentGain: state => state.investment.gain,
  investmentDialogVisible: state => state.investment.dialogVisible,
  investmentErrorDialogVisible: state => state.investment.errorDialogVisible,
  isInvestmentValid: state => state.investment.isValid,
  investmentOptions: state => state.investment.list,
  investmentContribution: state => state.investment.totalContribution,
  initializedUser: state => state.user.isInitialized,
  userRisk: state => state.fundList.risk,
  lowRiskFund: state => state.fundList.low,
  mediumRiskFund: state => state.fundList.medium,
  highRiskFund: state => state.fundList.high
}
export default getters