<template>
	<v-card

	>
		<v-img
			 class="align-end text-white"
			 height="200"
			 :src="product.img"
			 cover
		>

		</v-img>

		<v-card-title>{{product.title}}</v-card-title>

		<v-card-text>
			{{product.description}}
		</v-card-text>

		<v-card-actions>
			<v-btn color="orange" @click="router.push(`/${product.categoryID}/${product.id}`)">
				Смотреть
			</v-btn>
		</v-card-actions>
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

<style scoped>

</style>