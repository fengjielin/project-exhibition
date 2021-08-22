import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path:'/',
    name:'',
    redirect:'/content'
  },
  {
    path: '/content',
    name:'Content',
    component: () => import('@/views/Content/Content')
  },
  {
    path: '/edit',
    name:'Edit',
    component: () => import('@/views/Edit/Edit')
  },
  {
    path: '/details',
    name:'Details',
    component: () => import('@/views/Details/Details')
  }
]
const router = new Router({
  routes,
  mode:'history'
})

export default router