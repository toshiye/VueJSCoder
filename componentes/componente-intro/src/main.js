import Vue from 'vue'
import App from './App.vue'
import contadores from '../../componente-desafio/src/contadores.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
