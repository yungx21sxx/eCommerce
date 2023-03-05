<template>
		<v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
		<ProductList
			 :products="category.products"
		/>
</template>

<script setup>

import useProducts from "~/composables/useProducts";

const route = useRoute()
const {getProductsCategory} = useProducts()

const {data: category, pending} = getProductsCategory(route.params.category)


const breadcrumbs = computed(() =>[
	{
		title: 'Home',
		href: "/"
	},
	{
		title: category.value.name,
	}
])



</script>

<style scoped>

</style>