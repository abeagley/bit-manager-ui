import Vue from 'vue'
import App from './pages/app/container.vue'
import router from './router'
import store from './store'

// Global modules
import ElementUi from 'element-ui'

// Global styles
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

// Global module setup
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
