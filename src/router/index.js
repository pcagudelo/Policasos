import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import("../views/login.vue")     
    },
    {
      path: '/registrar',
      name: 'registrar',     
      component: () => import('../views/RegistrarCaso.vue')
    },
    {
      path: '/listado',
      name: 'listado',
      component: ()=>import("../views/ListadoCaso.vue")     
    },
    {
      path: '/gestion',
      name: 'gestion',
      component: ()=>import("../views/GestionCaso.vue")    
    },

  ]
})

export default router
