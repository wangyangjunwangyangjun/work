import { request } from './require'
// 发送验证码
export function senPassword (tel) {
  return request({
    url: '/users/sendCode?phone=' + tel
  })
}
// 验证码注册账号
export function RegisterBySendPassword (tel, password) {
  return request({
    url: '/users/codePhoneLogin?phone=' + tel + '&password=' + password
  })
}
// 获取哔哩哔哩会员购的购票信息
export function getMutildata_Tickets () {
  return request({
    url: '/tickets/sendTicketsInfo'
  })
}
