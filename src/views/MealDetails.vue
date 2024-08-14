<template>
	<div class="w-[800px] mx-auto p-8">
		<h1 class="text-3xl font-bold text-orange-500">{{ meal.strMeal }}</h1>
		<img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%] mt-6">
		<div class="grid drid-cols-1 sm:grid-cols-3 text-lg py-4">
			<div>
				<strong class="font-bold">Category:</strong> {{ meal.strCategory }}
			</div>
			<div>
				<strong class="font-bold">Area:</strong> {{ meal.strArea }}
			</div>
			<div>
				<strong class="font-bold">Tags:</strong> {{ meal.strTags }}
			</div>
		</div>
		<hr class="mb-5">
		<div>
			{{ meal.strInstructions }}
		</div>
		<hr class="my-5">
		<div class="grid drid-cols-1 sm:grid-cols-2">
			<div>
				<h2 class="text-2xl font-semibold mb-3 text-orange-500">Ingredients</h2>
				<ul>
					<template v-for="(el, idx) of new Array(20)" :key="idx">
						<li v-if="meal[`strIngredient${idx + 1}`]">
							{{ idx + 1 }} {{ meal[`strIngredient${idx + 1}`] }}
						</li>
					</template>
				</ul>
			</div>
			<div>
				<h2 class="text-2xl font-semibold mb-3 text-orange-500">Measures</h2>
				<ul>
					<template v-for="(el, idx) of new Array(20)" :key="idx">
						<li v-if="meal[`strMeasure${idx + 1}`]">
							{{ idx + 1 }} {{ meal[`strMeasure${idx + 1}`] }}
						</li>
					</template>
				</ul>
			</div>
			<div class="mt-8">
				<YoutubeButton :href="meal.strYoutube">View on Youtube</YoutubeButton>	
				<a 
					:href="meal.strSource" 
					target="_blank" 
					class="ml-3 px-3 py-2 rounded border-2 border-transparent text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
						View original source
				</a>		
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YoutubeButton from '../components/YoutubeButton.vue'

const route = useRoute();
const meal = ref({})

onMounted(() => {
	axiosClient.get(`lookup.php?i=${route.params.id }`)
	.then(({data}) => {
		meal.value = data.meals[0] || {}
	})	
})
</script>