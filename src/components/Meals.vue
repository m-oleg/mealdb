<template>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">				
		<MealItem v-for="meal of meals" :key="meal.ingredient" :meal="meal" />
	</div>
	<div v-if="!meals" class="flex justify-center text-gray-600">
		There are no meals with such ingredient
	</div>	
</template>

<script setup>
import MealItem from './MealItem.vue'

const props = defineProps({	
	meals: {
		type: Object
	}	
})
</script>