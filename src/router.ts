import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './components/Home.vue';
import Clothing from './components/Clothing.vue';
import Electronics from './components/Electronics.vue';
import Groceries from './components/Groceries.vue';
import BestSeller from './components/BestSeller.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/clothing',
    name: 'Clothing',
    component: Clothing,
  },
  {
    path: '/electronics',
    name: 'Electronics',
    component: Electronics,
  },
  {
    path: '/groceries',
    name: 'Groceries',
    component: Groceries,
  },
  {
    path: '/bestseller',
    name: 'BestSeller',
    component: BestSeller,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;