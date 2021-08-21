import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path:'/',
    name:'',
    redirect:'/index'
  },
  {
    path: '/index',
    name:'Index',
    component: () => import('@/views/index/Index')
  },
  {
    path: '/details',
    name:'Details',
    component: () => import('@/views/details/Details')
  }
]
const router = new Router({
  routes
})

export default router