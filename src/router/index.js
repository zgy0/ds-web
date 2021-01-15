import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'

import baiduHotData from '../components/baiduHotData'
import weiboHotData from '../components/weiboHotData'

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/baiduHotData',
          name: 'baiduHotData',
          component: baiduHotData
        },
        {
          path: '/weiboHotData',
          name: 'weiboHotData',
          component: weiboHotData
        }
      ]
    }
  ]
});