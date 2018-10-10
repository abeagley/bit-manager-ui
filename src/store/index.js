import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from '@/pages/app/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  }
})
