import client from '@/apollo'
import query from './query'

export default {
  actions: {
    async loadBit ({ commit }, variables) {
      commit('doLoadBit')

      let bit = null

      try {
        bit = await client.query({
          query,
          variables
        }).then((resp) => resp.data.bit)
      } catch (e) {
        return commit('doLoadBitFailed', e.message)
      }

      commit('doLoadBitSuccess', bit)

      return bit
    }
  },

  getters: {},

  mutations: {
    doLoadBit (state) {
      state.loading = true
    },

    doLoadBitSuccess (state, bit) {
      state.bit = bit
      state.loading = false
    },

    doLoadBitFailed (state, msg) {
      state.error = msg
      state.loading = false
    }
  },

  state: {
    bit: null,
    error: null,
    loading: true
  }
}
