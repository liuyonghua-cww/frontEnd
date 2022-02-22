import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: import('@/views/Index.vue'),
        redirect: '/list',
        children: [
            {
                path: 'list',
                name: 'List',
                component: import('@/components/List/index.vue'),
            },
            {
                path: 'editor',
                name: 'Editor',
                component: import('@/components/Editor/index.vue')
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
