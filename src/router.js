import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './HomePage.vue';
import CadastrarAposta from './CadastrarAposta.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/cadastrar-aposta',
    name: 'CadastrarAposta',
    component: CadastrarAposta,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
