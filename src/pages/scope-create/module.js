import client from '@/apollo'

import mutation from './mutation'

export default {
  actions: {
    async createBitScope ({ commit }, variables) {
      commit('doCreateBitScope')

      let scope = null

      try {
        scope = await client.mutate({
          mutation,
          variables
        }).then((resp) => resp.data.createBitScope)
      } catch (e) {
        commit('doCreateBitScopeFailed', e.message)
        return false
      }

      commit('doCreateBitScopeSuccess')
      return scope
    }
  },

  getters: {},

  mutations: {
    doCreateBitScope (state) {
      state.creating = true
    },

    doCreateBitScopeSuccess (state) {
      state.creating = false
    },

    doCreateBitScopeFailed (state, msg) {
      state.error = msg
      state.creating = false
    }
  },

  state: {
    creating: false,
    error: null
  }
}
