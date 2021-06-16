import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'


const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children:[
        
        {
            path:'/',
            name: 'Home',
            component: Home,
        }
        
        
        
        ]
  },
  
  
  {
    path: '/about',
    name: 'About',
     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
