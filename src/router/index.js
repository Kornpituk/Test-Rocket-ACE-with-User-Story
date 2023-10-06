import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/luncehes/all/:id',
      name: 'all-details',
      component: DetailsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // Route for Navi -------------------------------------------------------
    {
      path: '/luncehes/past',
      name: '/luncehes-past',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePastView.vue')
    },
    {
      path: '/luncehes/upcoming',
      name: '/luncehes-upcoming',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeUpcomingView.vue')
    },

    // ---------------------------------------------------------------------
    // route for Details past&upcoming ----------------------
    {
      path: '/luncehes/past/:id',
      name: 'past-details',
      component: DetailsView
    },
    {
      path: '/luncehes/upcoming/:id',
      name: 'past-upcoming',
      component: DetailsView
    },
    //-----------------------------
    
    {
      path: '/contactus',
      name: 'contactus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
