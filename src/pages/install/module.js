import client from '@/apollo'

import mutation from './mutation'
import query from './query'

export default {
  actions: {
    async install ({ commit }, variables) {
      commit('doInstall')

      let settings = {}

      try {
        settings = await client.mutate({
          mutation,
          variables
        }).then((resp) => resp.data.install)
      } catch (e) {
        commit('doInstallFailed', e.message)
        return false
      }

      commit('doLoadSettingsSuccess', settings)
      return true
    },

    async loadSanityCheck ({ commit }) {
      commit('doSanityCheck')

      let sanityCheck = {}

      try {
        sanityCheck = await client.query({
          query
        }).then((resp) => resp.data.sanityCheck)
      } catch (e) {
        commit('doSanityCheckFailed', e.message)
        return false
      }

      commit('doSanityCheckSuccess', sanityCheck)
      return true
    }
  },

  getters: {},

  mutations: {
    doSanityCheck (state) {
      state.loading = true
    },

    doSanityCheckSuccess (state, sanityCheck) {
      state.loading = false
      state.sanityCheck = sanityCheck
    },

    doSanityCheckFailed (state, msg) {
      state.error = msg
      state.loading = false
    },

    doInstall (state) {
      state.installing = true
    },

    doInstallFailed (state, msg) {
      state.error = msg
      state.installing = false
    }
  },

  state: {
    error: null,
    installing: false,
    loading: false,
    sanityCheck: {}
  }
}
