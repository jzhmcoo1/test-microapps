import VueRouter from 'vue-router';

import Layout from '../layout/base-layout.vue';

const route = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/microapp-sub*',
      component: Layout,
    },
  ],
});

export default route;
