import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import request from '@/services'
import 'assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.$http = request

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
