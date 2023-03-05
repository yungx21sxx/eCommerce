<template>
	<v-row
		 class="products"
	>
		<v-col
			 class="products__item"
			 v-for="product in props.products"

			sm="4"
		>
			<ProductItem
				 :product="product"
				 :key="product.id"
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
	.products {
		margin-top: 20px;
	}




</style>