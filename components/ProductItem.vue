<template>
	<v-card
		 class="product-item"
		 :href="`/${product.categoryHref}/${product.id}`"
		 height="300px"
	>
		<div class="product-item__img-container">
			<v-img
				 height="200"
				 width="200"
				 :src="product.img"
			></v-img>
		</div>




		<v-card-title>{{product.price}}$</v-card-title>

		<v-card-text>
			{{product.title}}
		</v-card-text>
	</v-card>

</template>

<script setup>

const router = useRouter()


defineProps({
	product: {
		required: true,
		type: Object
	}
})


</script>

<style scoped lang="scss">

.product-item {
	&__img-container {
		display: flex;
		justify-content: center;
	}
}

</style>