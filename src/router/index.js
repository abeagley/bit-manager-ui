import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const validateLogin = (requiresAdmin = false) => {
  const profile = (localStorage.getItem('profile')) ? JSON.parse(localStorage.getItem('profile')) : false

  return (!profile)
    ? false
    : (!(requiresAdmin && profile.role !== 'admin'))
}

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
      path: '/app',
      component: () => import('@/pages/layout/container.vue'),
      beforeEnter: (to, from, next) => validateLogin() ? next() : next({ name: 'login' }),
      children: [
        {
          path: '',
          redirect: {
            name: 'dashboard'
          }
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/pages/dashboard/container.vue')
        },
        {
          path: 'scopes',
          name: 'scopes',
          component: () => import('@/pages/scopes/container.vue')
        },
        {
          path: 'bits',
          name: 'bits',
          component: () => import('@/pages/bits/container.vue')
        },
        {
          path: 'bits/:pathName/:box/:name',
          name: 'bitShow',
          component: () => import('@/pages/bit-show/container.vue')
        },
        {
          path: 'scopes/create',
          name: 'scopeCreate',
          component: () => import('@/pages/scope-create/container.vue')
        },
        {
          path: 'scopes/:pathName',
          name: 'scopeShow',
          component: () => import('@/pages/scope-show/container.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('@/pages/settings/container.vue')
        }
      ]
    }
  ]
})
