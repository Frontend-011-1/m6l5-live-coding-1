import DetalleProductoView from '@/views/DetalleProductoView.vue';
import HomeView from '@/views/HomeView.vue';
import ProductosView from '@/views/ProductosView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductosView,
    },
    {
      path: '/productos/:id',
      name: 'producto',
      component: DetalleProductoView,
    },
  ],
});

export default router;
