import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
console.log(router)
router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      console.log(hasRoles)
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/')
    }
  }
})
router.afterEach(() => {})
