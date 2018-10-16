import client from '@/apollo'

import query from './query'

export default {
  actions: {
    async loadBitScopes ({ commit }, variables) {
      commit('doLoadBitScopes')

      let scopes = []

      try {
        scopes = await client.query({
          query,
          variables,
          fetchPolicy: 'network-only'
        }).then((resp) => resp.data.bitScopes)
      } catch (e) {
        commit('doLoadBitScopesFailed', e.message)
        return false
      }

      commit('doLoadBitScopesSuccess', scopes)
      return true
    }
  },

  getters: {},

  mutations: {
    doLoadBitScopes (state) {
      state.loading = true
    },

    doLoadBitScopesSuccess (state, bitScopes) {
      state.data = bitScopes
      state.loading = false
    },

    doLoadBitScopesFailed (state, msg) {
      state.error = msg
      state.loading = false
    }
  },

  state: {
    error: null,
    data: [],
    loading: true
  }
}
