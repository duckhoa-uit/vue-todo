import { createWebHistory, createRouter } from 'vue-router';
import Landing from '../views/Landing.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Todo from '../views/Todo.vue';
import store from '../store';

const routes = [
	{
		path: '/',
		name: 'Landing',
		component: Landing,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: SignUp,
	},
	{
		path: '/todos',
		name: 'Todo',
		component: Todo,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.getAccount) {
			next();
			return;
		} else {
			next('/login');
		}
	} else {
		next();
	}
});

export default router;
