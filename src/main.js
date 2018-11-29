import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import toastRegistry from './components/toast.js'
import messageBoxRegistry from './components/messageBox.js'

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

// 这里也可以直接执行 toastRegistry()
Vue.use(toastRegistry)
Vue.use(messageBoxRegistry)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
