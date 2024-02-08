import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/UserHome.vue'),
      },
      {
        path: 'products',
        name: 'Product',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/UserCart.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/AdminLogin.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin/AdminDashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
