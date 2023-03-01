<template>
	<div class="product">
		<div class="product__breadcrumbs">
			<v-breadcrumbs
				 :items="breadcrumbs"
			>
			</v-breadcrumbs>

		</div>




	</div>

</template>

<script setup>
	const route = useRoute()

	const {data: product} = await useAsyncData("product", () => $fetch(`/api/product/${route.params.id}`,{
		method: 'GET'
	}))

	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/'
		},
		{
			title: product.value.categoryName,
			href: `/${product.value.categoryID}`
		},
		{
			title: product.value.title,
			href: ''
		}
	]


</script>

<style scoped>

</style>