import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods'
import about from '@/components/about'
import store from '@/components/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },{path:'/goods',component: Goods}
      ,{path:'/about',component:about}
      ,{path:'/store',component:store}
  ]
})
