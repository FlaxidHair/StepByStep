import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import autoAnimate from '@formkit/auto-animate'
import './assets/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  autoAnimate
}).$mount('#app')
