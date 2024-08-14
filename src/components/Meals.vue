<template>
	<div v-if="meals.length" class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">				
		<MealItem v-for="meal of meals" :key="meal.ingredient" :meal="meal" />
	</div>
	<div v-else class="flex justify-center text-gray-600 p-4">
		There are no meals
	</div>	
</template>

<script setup>
import MealItem from './MealItem.vue'

const props = defineProps({	
	meals: {
		required: true,
		type: Array
	}	
})
</script>