
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue();
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif