const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  netIncome: state => state.netBalance.income,
  netSaving: state => state.netBalance.saving,
  netSpending: state => state.netBalance.spending,
  goalSaving: state => state.netBalance.goalSaving,
  goalSpending: state => state.netBalance.goalSpending
}
export default getters
