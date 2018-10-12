import client from '@/apollo'

import query from './query'

export default {
  actions: {
    async loadBitRepositories ({ commit }, variables) {
      commit('doLoadBitRepositories')

      let repos = []

      try {
        repos = await client.query({
          query,
          variables
        }).then((resp) => resp.data.bitRepositories)
      } catch (e) {
        commit('doLoadBitRepositoriesFailed', e.message)
        return false
      }

      commit('doLoadBitRepositoriesSuccess', repos)
      return true
    }
  },

  getters: {},

  mutations: {
    doLoadBitRepositories (state) {
      state.loading = true
    },

    doLoadBitRepositoriesSuccess (state, bitRepositories) {
      state.loading = false
      state.data = bitRepositories
    },

    doLoadBitRepositoriesFailed (state, msg) {
      state.error = msg
      state.loading = false
    }
  },

  state: {
    error: null,
    data: [],
    loading: false
  }
}
