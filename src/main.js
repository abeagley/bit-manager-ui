import Vue from 'vue'
import App from './pages/app/container.vue'
import router from './router'
import store from './store'

// Global modules
import ElementUi from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueClipboard from 'vue-clipboard2'
import VueCodemirror from 'vue-codemirror'

// Global styles
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/tomorrow-night-eighties.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

// Font awesome
import {
  faBars,
  faClone,
  faDownload,
  faEye,
  faHeart,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { library as svgIcons } from '@fortawesome/fontawesome-svg-core'

svgIcons.add(faBars, faClone, faDownload, faEye, faHeart, faSearch, faUser)

// Global module setup
Vue.use(ElementUi, { locale })
Vue.use(VueClipboard)
Vue.use(VueCodemirror, {
  options: {
    lineNumbers: true,
    mode: 'jsx',
    readOnly: true,
    tabSize: 2,
    theme: 'tomorrow-night-eighties'
  }
})

// Global components
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
