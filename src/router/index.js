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
        name: 'install'
      }
    },
    {
      path: '/install',
      name: 'install',
      component: () => import('@/pages/install/container.vue')
    }
  ]
})
