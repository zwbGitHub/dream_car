import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/brand',
    component: Layout,
    children: [
      {
        path: '/brand',
        name: 'brand',
        component: () => import('../views/Brand.vue')
      },
      {
        path: '/series',
        name: 'series',
        component: () => import('../views/Series.vue')
      },
      {
        path: '/model',
        name: 'model',
        component: () => import('../views/Model.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
/* router.beforeEach((to, from, next) => {
  if (store.state.brandData.length === 0 && to.name !== 'brand') {
    next('/brand')
  } else {
    next()
  }
}) */

export default router
