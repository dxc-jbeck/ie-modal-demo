
import 'core-js'
import 'core-js/shim'
import '@babel/polyfill'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.component('Modal', () => import('@/components/Modal'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  validations: {},
  render: h => h(App)
}).$mount('#app')
