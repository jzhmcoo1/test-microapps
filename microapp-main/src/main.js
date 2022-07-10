import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import start from './modules';

Vue.config.productionTip = false;

Vue.use(VueRouter);

start();

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
