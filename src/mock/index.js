import Mock from 'mockjs'
import loginAPI from './login'
import remoteSearchAPI from './remoteSearch'
import transactionAPI from './transaction'
import balanceAPI from './balance'

// Mock.setup({
//   timeout: '350-600'
// })

// locin
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// search user
Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)

// get transaction
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

// get balance
Mock.mock(/\/balance/, 'get', balanceAPI.getBalance)
export default Mock
