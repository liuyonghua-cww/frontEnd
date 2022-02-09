import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/todoList',
    component: () => import('../views/TodoList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
