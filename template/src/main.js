import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
