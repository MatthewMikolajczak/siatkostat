import Vue from 'vue'
import Router from 'vue-router'
import ViewsManager from '@/components/ViewsManager'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ViewsManager',
      component: ViewsManager
    },
    { path: '*', redirect: '/' }
  ]
})
