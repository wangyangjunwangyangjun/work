import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // 对未登录的用户进行限制一部分功能
    token: 'unLogin',
    shift: 'watching',
    logo: require('../assets/img/userlogo.jpg'),
    tel: undefined,
    userName: undefined,
    paiZi: undefined,
    paiZiLevel: undefined,
    userLevel: undefined
  }
});
export default store
