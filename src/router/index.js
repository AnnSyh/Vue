import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: IndexPage,
      meta: {
        breadCrumb: 'Гл.страница'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        breadCrumb: 'Login'
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        breadCrumb: 'Register'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
