import { param2Obj } from '@/utils'

const userMap = {
  Jay: {
    roles: ['customer'],
    token: 'Jay',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Jay Foraker',
    customerID: '297f00cb-58a7-4a03-97e0-c8d09d0aea55_ec59a644-7ec3-437a-a5aa-b00c9709785c'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
