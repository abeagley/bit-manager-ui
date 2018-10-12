import Vue from 'vue'
import App from './pages/app/container.vue'
import router from './router'
import store from './store'

// Global modules
import ElementUi from 'element-ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Global styles
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

// Font awesome
import {
  faBars,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { library as svgIcons } from '@fortawesome/fontawesome-svg-core'

svgIcons.add(faBars, faSearch, faUser)

// Global module setup
Vue.use(ElementUi)

// Global components
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
