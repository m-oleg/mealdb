import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '',
		name: 'home',
		component: () => import('./components/DefaultLayout.vue'),
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('./views/Home.vue')
			},
			{
				path: '/letter/:letter?',
				name: 'byLetter',
				component: () => import('./views/MealByLetter.vue')
			},
			{
				path: '/name/:name?',
				name: 'byName',
				component: () => import('./views/MealByName.vue')
			},
			{
				path: '/ingredients',
				name: 'ingredients',
				component: () => import('./views/Ingredients.vue')
			},
			{
				path: '/ingredient/:ingredient',
				name: 'byIngredient',
				component: () => import('./views/MealByIngredients.vue')
			},
			{
				path: '/meal/:id',
				name: 'mealDetails',
				component: () => import('./views/MealDetails.vue')
			}
		]
	},
	{
		path: '/guest',
		component: () => import('./components/GuestLayout.vue')
	}	
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;