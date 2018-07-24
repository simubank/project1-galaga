import { param2Obj } from '@/utils'

const userMap = {
  Jay: {
    roles: ['customer'],
    token: 'Jay',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Jay Foraker',
    customerID: '297f00cb-58a7-4a03-97e0-c8d09d0aea55_ec59a644-7ec3-437a-a5aa-b00c9709785c'
  },
  Odalys: {
    roles: ['customer'],
    token: 'Odalys',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Odalys Mcculley',
    customerID: '297f00cb-58a7-4a03-97e0-c8d09d0aea55_c6107914-4779-4da1-8563-1191a5d4c2c7'
  },
  Ivana: {
    roles: ['customer'],
    token: 'Ivana',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Ivana Easom',
    customerID: '297f00cb-58a7-4a03-97e0-c8d09d0aea55_e2ba9727-a181-48f6-a1bc-0abf5ce173a2'
  },
  Sima: {
    roles: ['customer'],
    token: 'Sima',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Sima Beliard',
    customerID: '297f00cb-58a7-4a03-97e0-c8d09d0aea55_46e1ff05-48c1-4fe8-b645-39d157d97eff'
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
