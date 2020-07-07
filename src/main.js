import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import './assets/variables.css'
import './assets/global.css'

import Dashboard from './components/Dashboard'
import Backlog from './components/Backlog'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/Backlog', name: 'Backlog', component: Backlog }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
