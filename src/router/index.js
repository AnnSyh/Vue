import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage.vue'
import Сomands from '@/components/Comands.vue'
import Players from '@/components/Players.vue'
import Trainers from '@/components/Trainers.vue'
import Staff from '@/components/Staff.vue'

// Elon Musk's Components
import HelloElon from '@/components/ElonMusk/HelloElon.vue'
import HelloElonCompany from '@/components/ElonMusk/HelloElonCompany.vue'
import HelloElonCompanyProduct from '@/components/ElonMusk/HelloElonCompanyProduct.vue'

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
      path: '/comands',
      component: Сomands,
      meta: {
        breadCrumb: 'Сomands'
      },
      children: [
        {
          path: 'players',
          component: Players,
          meta: {
            breadCrumb: 'Players'
          }
        },
        {
          path: 'trainers',
          component: Trainers,
          meta: {
            breadCrumb: 'Trainers'
          }
        },
        {
          path: 'staff',
          component: Staff,
          meta: {
            breadCrumb: 'Staff'
          }
        }        
      ]
    },
    {
      path: '/matches',
      component: HelloElon,
      meta: {
        breadCrumb: 'Matches'
      },
      children: [
        {
          path: ':company',
          component: HelloElonCompany,
          props: true,
          children: [
            {
              path: ':product',
              component: HelloElonCompanyProduct,
              props: true
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
