import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home/index.vue'),
	},
]

export default routes
