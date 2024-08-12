<template>
	<div class="p-8 pb-0">
		<input 
			type="text" 
			class="rounded border-2 border-gray-200 w-full" 
			placeholder="Search for Meals"
			v-model="keyword"
			@change="searchMeals"
		>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
		<div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl pb-2">
			<router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
				<img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">			
			</router-link>
			<div class="p-3">
				<h3 class="font-bold">{{ meal.strMeal }}</h3>
				<p class="mb-4">Lorem ipus</p>
				<YoutubeButton :href="meal.strYoutube">View</YoutubeButton>				
			</div>
		</div>
	</div>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import YoutubeButton from '../components/YoutubeButton.vue'
import store from '../store'


const route = useRoute();
const keyword  = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
	store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
	keyword.value = route.params.name
	if(keyword.value) {
		searchMeals()
	}
})

</script>