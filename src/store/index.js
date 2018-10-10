import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from '@/pages/app/module'
import install from '@/pages/install/module'
import login from '@/pages/login/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    install,
    login
  }
})
