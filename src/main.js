import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from "./router"
import ElementUi from 'element-ui'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/init.css'





Vue.use(ElementUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
