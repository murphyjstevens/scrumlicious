import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'

import './assets/variables.css'
import './assets/global.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Dashboard from './components/Dashboard'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
