import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ './views/index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue')
        },
        {
          path: 'selector',
          name: 'selector',
          component: () => import(/* webpackChunkName: "selector" */ './views/selector/Selector.vue')
        },
        {
          path: 'chart',
          name: 'chart',
          component: () => import(/* webpackChunkName: "chart" */ './views/chart/Chart.vue')
        },
        {
          path: 'navigation',
          name: 'navigation',
          component: () => import(/* webpackChunkName: "navigation" */ './views/navigation/Navigation.vue')
        }
      ]
    },
    {
      path: '/headerList',
      name: 'headerList',
      component: () => import(/* webpackChunkName: "headerList" */ './views/home/HeaderList.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import(/* webpackChunkName: "swiper" */ './views/home/Swiper.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import(/* webpackChunkName: "radio" */ './views/home/Radio.vue')
    },
    {
      path: '/checkList',
      name: 'checkList',
      component: () => import(/* webpackChunkName: "checkList" */ './views/home/CheckList.vue')
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import(/* webpackChunkName: "navbar" */ './views/home/Navbar.vue')
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import(/* webpackChunkName: "progress" */ './views/home/Progress.vue')
    },
    {
      path: '/range',
      name: 'range',
      component: () => import(/* webpackChunkName: "range" */ './views/home/Range.vue')
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import(/* webpackChunkName: "toast" */ './views/home/Toast.vue')
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import(/* webpackChunkName: "switch" */ './views/home/Switch.vue')
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: () => import(/* webpackChunkName: "messageBox" */ './views/home/MessageBox.vue')
    },
    // {
    //   path: '/progress',
    //   name: 'progress',
    //   component: () => import(/* webpackChunkName: "progress" */ './views/home/Progress.vue')
    // },
    // {
    //   path: '/progress',
    //   name: 'progress',
    //   component: () => import(/* webpackChunkName: "progress" */ './views/home/Progress.vue')
    // },
  ]
})
