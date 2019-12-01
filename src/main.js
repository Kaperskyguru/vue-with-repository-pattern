import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import store from './store';

Vue.config.productionTip = false

new Vue({
  el: "#app",
  store,
  render: h => h(App),
  router: Router,
})