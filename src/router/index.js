import DetalleProductoView from '@/views/DetalleProductoView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFound from '@/views/NotFound.vue';
import OpinionesView from '@/views/OpinionesView.vue';
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
      path: '/inicio',
      redirect: { name: 'home' },
    },
    {
      path: '/productos',
      name: 'productos',
      alias: '/items',
      component: ProductosView,
    },
    {
      path: '/productos/:id',
      name: 'producto',
      alias: '/items/:id',
      component: DetalleProductoView,
      children: [
        {
          path: 'opiniones',
          component: OpinionesView,
          name: 'opiniones',
          props: true,
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
