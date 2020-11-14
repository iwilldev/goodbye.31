import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/destination/:slug',
    name: 'destination-details',
    component: () => import(/* webpackChunkName: 'destination-details' */ '../views/DestinationDetails.vue'),
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () => import(/* webpackChunkName: 'experience-details' */ '../views/ExperienceDetails.vue'),
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exists) {
        next()
      } else {
        next({name: 'notFound'})
      }
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () =>
      import(/* webpackChunkName: 'User' */ '../views/UserDashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: 'Login' */ '../views/UserLogin.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import(/* webpackChunkName: 'Invoices' */ '../views/UserInvoices.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: 'not-found' */ '../views/NotFound.vue'),
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'selected-destination',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if(to.hash === '#experience'){
          position.offset = {y:150}
        }
        if(document.querySelector(to.hash)){
          return position;
        }
        return false;
      }
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: 'login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
