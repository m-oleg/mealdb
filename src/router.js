import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '',
		name: 'home',
		component: () => import('./views/Home.vue')
	},
	{
		path: '/letter/:letter',
		name: 'byLetter',
		component: () => import('./views/MealList.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;