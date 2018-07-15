import request from '@/utils/request'

export function getUserBalance() {
  return request({
    url: '/balance',
    method: 'get'
  })
}
