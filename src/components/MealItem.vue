<template>	 
	<div class="bg-white shadow rounded-xl pb-2">
			<router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
				<img 
					:src="meal.strMealThumb" 
					:alt="meal.strMeal" 
					class="rounded-t-xl w-full h-48 object-cover" 
				/>			
			</router-link>
			<div class="px-6 py-4">
				<h3 class="text-xl font-bold text-orange-500 mb-3">{{ meal.strMeal }}</h3>
				<p class="mb-6">
					{{ $filters.truncateWords(meal.strInstructions, 30) }}
				</p>
				<YoutubeButton :href="meal.strYoutube" />
			</div>
	</div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'

const props = defineProps({
	meal: {
		required: true,
		type: Object
	}
})
</script>