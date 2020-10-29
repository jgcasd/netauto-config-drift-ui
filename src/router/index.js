import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskManager from '../views/TaskManager.vue'
import GetConfig from '../views/GetConfig.vue'
import SendConfig from '../views/SendConfig.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'task-manager',
    component: TaskManager
  },
  {
    path: '/task-manager',
    name: 'task-manager',
    component: TaskManager
  },
  {
    path: '/get-config',
    name: 'get-config',
    component: GetConfig
  },
  {
    path: '/send-config',
    name: 'send-config',
    component: SendConfig
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
