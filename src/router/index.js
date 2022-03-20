import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const Home = ()=>import('../views/home/Home')
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
   {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: ()=>import('../views/category/Category')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import('../views/cart/Cart')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=>import('../views/profile/Profile')
  },
  // {
  //   path: '/',
  //   name: 'app',
  //   component: app
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
