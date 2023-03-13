import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* Layout */
// import Layout from '@/layout'

const constantRoutes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  }
]
// const asyncRouters = []
const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
