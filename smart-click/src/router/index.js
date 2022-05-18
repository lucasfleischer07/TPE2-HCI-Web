import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import(/* webpackChunkName: "devices" */ '../views/DevicesView.vue')
  },
  {
    path: '/routines',
    name: 'Routines',
    component: () => import(/* webpackChunkName: "routines" */ '../views/RoutinesView.vue'),
    children: [
      {
        //Matcheo lo que viene a continuacion de la ruta padre
        path: ":routineSlug",
        name: "routineDetailsView",
        props: true,
        component: () => import(/* webpackChunkName: "experienceDetails" */ "../views/RoutineDetailView.vue"),
      }
    ],
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsView.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue')
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
