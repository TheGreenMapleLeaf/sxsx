import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import '../public/js/flexble'
import axios from 'axios'
import Loading from "lib/loading/index.js"
import MintUI from "mint-ui"

import 'mint-ui/lib/style.css'
import "./custom/directive/index.js"
Vue.config.productionTip = false
Vue.use(MintUI)

let vm=Loading();
axios.interceptors.request.use((config)=>{
  vm.mountHandler();
  return config;
})
axios.interceptors.response.use((res)=>{
  vm.destoryHandler();
  return res;
})

Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
