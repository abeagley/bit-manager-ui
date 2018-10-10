import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'dashboard'
      }
    },
    {
      path: '/install',
      name: 'install',
      component: () => import('@/pages/install/container.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/container.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/dashboard/container.vue')
    }
  ]
})
