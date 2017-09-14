import VueRouter from 'vue-router';

const routes = [
  { path: '/', component: require('@/App.vue') },
]

export default new VueRouter({
  routes,
  mode: 'history',
});
