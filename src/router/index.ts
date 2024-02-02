import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 路由
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'dashboard',
		component: () => import('../views/dashboard/index.vue'),
		meta: {},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
