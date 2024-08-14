<template>
	<div class="flex gap-2 mt-8 justify-center text-lg">
		<router-link 
			:to="{name: 'byLetter', params: {letter}}" 
			v-for="letter of letters" 
			:key="letter"
		>
			{{ letter }}
		</router-link>
	</div>

	<Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue'
import store from '../store'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
	store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
	store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>