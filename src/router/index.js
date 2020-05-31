import Vue from 'vue'
import VueRouter from 'vue-router'
import dramaPlay from '../components/content/dramaPlay/dramaPlay'
import GuanZhu from '../components/common/guanzhu/GuanZhu'
import OnlineShow from '../components/content/onlineShow/OnlineShow'
import InfoForm from '../components/common/form/InfoForm'
import Setting from "../views/setting/Setting";

Vue.use(VueRouter);
// 懒加载
const Friend = () => import('../views/friend/Friend');
const Watching = () => import('../views/watching/Watching');
const Profile = () => import('../views/profile/Profile');
const FanJu = () => import('../views/fanJu/FanJu');
const Words = () => import('../views/Find/FInd');
const Login = () => import('../views/login/Login');
const routes = [
  {
    path:'/setting',
    name: 'setting',
    component:Setting
  },
  {
    path: '/info',
    name: 'info',
    component: InfoForm
  },
  {
    path: '',
    redirect: '/watching',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/watching/onlineShow',
    name: 'onlineShow',
    component: OnlineShow
  },
  {
    path: '/drama/watching',
    redirect: '/watching'
  },
  {
    path: '/drama/fanJu',
    redirect: '/fanJu'
  },
  {
    path: '/drama/profile',
    redirect: '/profile'
  },
  {
    path: '/drama/friend',
    redirect: '/friend'
  },
  {
    path: '/drama/Find',
    redirect: '/Find'
  },
  {
    path: '/friend',
    name: 'friend',
    component: Friend
  },
  {
    path: '/watching',
    component: Watching
  },
  {
    path: '/fanJu',
    component: FanJu
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/Find',
    component: Words
  },
  {
    path: '/drama/:season_id',
    name: 'dramaPlay',
    component: dramaPlay
  },
  {
    path: '/guanzhu',
    name: 'guanZhu',
    component: GuanZhu
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
