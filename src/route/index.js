import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
		path: '/',
		redirect: '/index',
	},
    {
        path: '/index',
        name: 'index',
        component: () => import('@/view/index/index.vue'),
    },
]

export const router = createRouter({
    //history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes: routes
})

export default router