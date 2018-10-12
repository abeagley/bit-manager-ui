import client from '@/apollo'

import mutation from './mutation'

export default {
  actions: {
    async createBitRepository ({ commit }, variables) {
      commit('doCreateBitRepository')

      let repos = []

      try {
        repos = await client.query({
          mutation,
          variables
        }).then((resp) => resp.data.createBitRepository)
      } catch (e) {
        commit('doCreateBitRepositoryFailed', e.message)
        return false
      }

      commit('doCreateBitRepositorySuccess', repos)
      return true
    }
  },

  getters: {},

  mutations: {
    doCreateBitRepository (state) {
      state.creating = true
    },

    doCreateBitRepositorySuccess (state) {
      state.creating = false
    },

    doCreateBitRepositoryFailed (state, msg) {
      state.error = msg
      state.creating = false
    }
  },

  state: {
    creating: false,
    error: null
  }
}
