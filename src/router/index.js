import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import About from '../views/AboutView.vue';
import ToyApp from '../views/ToyApp.vue';
import ToyDetails from '../views/ToyDetails.vue';
import ToyEdit from '../views/ToyEdit.vue';
import Dashboard from '../views/dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/toy',
      name: 'ToyApp',
      component: ToyApp,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/toy/:id',
      name: 'ToyDetails',
      component: ToyDetails,
    },
    {
      path: '/toy/edit/:id?',
      name: 'ToyEdit',
      component: ToyEdit,
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
