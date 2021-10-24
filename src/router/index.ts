import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import AddTask from '../views/AddTask/AddTask.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/add_task',
    name: 'AddTask',
    component: AddTask
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
