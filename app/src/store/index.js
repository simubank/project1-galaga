import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import netBalance from './modules/netBalance'
import getters from './getters'
import fundList from './modules/fundList'
import investment from './modules/investment'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    tagsView,
    user,
    netBalance,
    fundList,
    investment
  },
  getters
})

export default store
