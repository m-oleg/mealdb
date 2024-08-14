<template>
	<h1 class="text-4xl font-semibold p-8 pb-0 text-orange-500">Random Meals</h1>
	<div class="p-2">
		<Meals :meals="meals" />
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axiosClient from '../axiosClient'
import Meals from '../components/Meals.vue'

const meals = ref([])

onMounted(async() => {
	for(let i = 0; i < 9; i++){
		axiosClient
			.get('random.php')
			.then(({data}) => meals.value.push(data.meals[0]))
	}
})
</script>