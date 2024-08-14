import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const store = createStore({
	state: {
		searchedMeals: [],
		mealsByLetter: [],
		mealsByIngredient: []
	},
	actions,
	mutations,
	getters,
})

export default store;