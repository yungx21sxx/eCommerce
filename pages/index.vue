<template>
	<div class="wrapper">
		<ProductList :products="products"/>
	</div>

</template>

<script setup>

	const {data: products} = await useAsyncData('products', () => $fetch('/api/products',{
		method: 'GET'
	}))

</script>

<style scoped lang="scss">
	.wrapper {
		padding: 0 10px;
		max-width: 1000px;
		width: 100%;
		margin: 20px auto;
	}

</style>