
import "@/EleUI";
import "rest-css";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './utis/requst';
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
