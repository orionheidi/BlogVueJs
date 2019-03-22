import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './containers/AppPosts.vue'
// import AddCar from './containers/AddCar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts', name: 'home' },
  { path: '/posts', component: AppPosts, name: 'posts' },
//   { path: '/add', component: AddCar, name: 'add' },
//   { path: '/edit/:id', component: AddCar, name: 'edit' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
