<template>
	<div class="p-8">
		<h1 class="text-3xl font-bold text-orange-500">Ingredients</h1>
		<input 
			type="text" 
			class="rounded border-2 border-gray-200 w-full my-6" 
			placeholder="Search for Ingredients"
			v-model="keyword"
		>
		<router-link 
			:to="{
				name: 'byIngredient', 
				params: {
					ingredient: ingredient.strIngredient
				}
			}" 
			v-for="ingredient of computedIngredients" 
			:key="ingredient.idIngredient" 
			class="bg-white rounded p-6 mb-4 shadow block"
		>
			<h3 class="text-xl font-bold mb-2 text-orange-500">{{ ingredient.strIngredient }}</h3>
			<p>{{ ingredient.strDescription }}</p>
		</router-link>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'

const keyword = ref('')
const ingredients = ref([])
const computedIngredients = computed(() => {
	if(!computedIngredients) return ingredients
	return ingredients.value.filter((i) => 		
		i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
	)
})

onMounted(() => {
	axiosClient.get('list.php?i=list').then(({data}) => {
		ingredients.value = data.meals
	})
})
</script>