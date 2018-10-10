import client from '@/apollo'
import mutation from './mutation'

export default {
  actions: {
    async login ({ commit }, variables) {
      commit('doLogin')

      let apiUserData = {}

      try {
        apiUserData = await client.mutate({
          mutation,
          variables
        }).then((resp) => resp.data.login)
      } catch (e) {
        commit('doLoginFailed', e.message)
        return false
      }

      localStorage.setItem('profile', JSON.stringify(apiUserData.profile))
      localStorage.setItem('token', apiUserData.token)

      commit('doLoginSuccess', apiUserData)
      return true
    },

    logout () {
      localStorage.clear()
      window.location.reload(true)
    }
  },

  getters: {},

  mutations: {
    doLogin (state) {
      state.loading = true
    },

    doLoginSuccess (state, apiUserData) {
      state.loading = false
      state.profile = apiUserData.profile
      state.token = apiUserData.token
    },

    doLoginFailed (state, msg) {
      state.error = msg
      state.loading = false
    }
  },

  state: {
    error: null,
    loading: false,
    profile: (localStorage.getItem('profile')) ? JSON.parse(localStorage.getItem('profile')) : {},
    token: (localStorage.getItem('token')) ? localStorage.getItem('token') : null
  }
}
