<template>
	<div class="wrapper">
		<client-only>
			<ProductList :products="products"/>
			<v-pagination :length="pagesNum" v-model="chosenPage" class="pagination"/>
		</client-only>

	</div>

</template>

<script setup>

import useProducts from "~/composables/useProducts";

const {getPagesNum} = useProducts()
const route = useRoute()
const router = useRouter()

const chosenPage = ref(+route.query.page || 1)

const {data: products, pending} = useLazyAsyncData('products', () => $fetch(`/api/products?page=${chosenPage.value}`,{
	method: 'GET',
}))
const {data: pagesNum} = getPagesNum()

watch(
	 () => chosenPage.value,
	 (page) => {
		 window.scroll(0,0)
		 refreshNuxtData('products')
		 router.replace({query: {page: page}})
	 }
)



</script>

<style scoped lang="scss">

.pagination {
	margin-top: 20px;
}


</style>