import client from '@/apollo'
import query from './query'

export default {
  actions: {
    async loadSettings ({ commit }, router) {
      commit('doLoadSettings')

      let settings = {}

      try {
        settings = await client.query({
          query
        }).then((resp) => resp.data.settings)
      } catch (e) {
        return commit('doLoadSettingsFailed', e.message)
      }

      commit('doLoadSettingsSuccess', settings)

      if (settings === {}) {
        router.replace({ name: 'install' })
      }
    }
  },

  getters: {},

  mutations: {
    doLoadSettings (state) {
      state.loading = true
    },

    doLoadSettingsSuccess (state, settings) {
      state.loading = false
      state.settings = settings
    },

    doLoadSettingsFailed (state, msg) {
      state.error = msg
      state.loading = false
    }
  },

  state: {
    error: null,
    loading: true,
    settings: {}
  }
}
