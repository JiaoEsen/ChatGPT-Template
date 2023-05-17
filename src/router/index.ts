import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
        
    }
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router