<template>
	<v-row
		 class="products"

	>
		<v-col
			 class="products__item"
			 v-for="product in props.products"
			 :key="product.id"
			sm="4"
		>
			<ProductItem
				 :product="product"
			/>
		</v-col>

	</v-row>




</template>

<script setup>


	const props = defineProps({
		products: {
			type: Array,
			required: true
		}
	});


</script>

<style scoped>




</style>