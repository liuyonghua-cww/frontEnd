import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Todo.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
