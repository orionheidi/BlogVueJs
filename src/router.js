import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './containers/AppPosts.vue'
import AddPost from './containers/AddPost.vue'
import AppSinglePage from './containers/AppSinglePage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts', name: 'home' },
  { path: '/posts', component: AppPosts, name: 'posts' },
  { path: '/add', component: AddPost, name: 'add' },
  { path: '/edit/:id', component: AddPost, name: 'edit' },
  { path: '/posts/:id', component: AppSinglePage, name: 'single' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
