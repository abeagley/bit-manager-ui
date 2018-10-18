import client from '@/apollo'

import query from './query'

export default {
  actions: {
    async loadBitScope ({ commit }, variables) {
      commit('doLoadBitScope')

      let data = null

      try {
        data = await client.query({
          query,
          variables,
          fetchPolicy: 'network-only'
        }).then((resp) => resp.data)
      } catch (e) {
        commit('doLoadBitScopeFailed', e.message)
        return false
      }

      commit('doLoadBitScopeSuccess', data)
      return true
    }
  },

  getters: {},

  mutations: {
    doLoadBitScope (state) {
      state.loading = true
    },

    doLoadBitScopeSuccess (state, data) {
      state.bits = data.bits
      state.scope = data.bitScope
      state.loading = false
    },

    doLoadBitScopeFailed (state, msg) {
      state.error = msg
      state.loading = false
    }
  },

  state: {
    bits: [],
    error: null,
    loading: true,
    scope: null
  }
}
