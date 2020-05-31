import { request } from './require'

// 番剧
export function getHomeMultidata_fanJu () {
  return request({
    url: 'multiData/sendFanJuInfo'
  })
}
// 生活
export function getHomeMultidata_life () {
  return request({
    url: 'multiData/sendMultiInfo_Video'
  })
}
// 舞蹈
export function getHomeMultidata_carousel () {
  return request({
    url: 'multiData/sendMultiInfo_Video'
  })
}
// 国漫
export function getHomeMultidata_guoman () {
  return request({
    url: 'multiData/sendFanJuInfo'
  })
}
// 音乐
export function getHomeMultidata_music () {
  return request({
    url: 'multiData/sendMultiInfo_TimeRank'
  })
}
// //dramaPlay
// export function getHomeMultidata_dramaPlay(season_id) {
//   return request(({
//     url:'?season_id='+season_id + '&page=1&quality=2&index=1',
//   }))
// }
// dramaPlay_Detail
export function getHomeMultidata_dramaPlayDetail () {
  return request(({
    url: 'multiData/sendMultiInfo_FanJu'
  }))
}
// dramaPlay_Replies
export function getHomeMultidata_dramaPlayReplies () {
  return request(({
    url: 'multiData/sendMultiInfo_Comments'
  }))
}
export function saveData (userName, password, paiZi, paiZiLevel, userLevel, sex, city, tel) {
  return request(({
    url: 'saveUserData?userName=' + userName + '&password=' + password + '&paiZi=' + paiZi + '&paiZiLevel=' + paiZiLevel + '&userLevel=' + userLevel + '&sex=' + sex + '&city=' + city + '&tel=' + tel
  }))
}
export function getUserInfo (tel) {
  return request(({
    url: 'getUserInfo?tel=' + tel
  }))
}
