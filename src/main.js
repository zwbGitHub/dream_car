import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vant/index'
import '@/assets/css/border.css'
import '@/assets/css/resets.css'
import '@/assets/js/common.js'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
