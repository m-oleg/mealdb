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

	<Meals :meals="meals" />
</template>

<script setup>

import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue'
import store from '../store'


const route = useRoute();
const keyword  = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
	if(keyword.value){
		store.dispatch('searchMeals', keyword.value)	
	}
	else {
		store.commit('setSearchedMeals', [])
	}	
}

onMounted(() => {
	keyword.value = route.params.name
	if(keyword.value) {
		searchMeals()
	}
})

</script>