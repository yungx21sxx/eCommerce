<template>
	<v-no-ssr>

		<v-fade-transition>

			<div class="product" v-if="!isLoaded">

				<div class="product__breadcrumbs">
					<v-breadcrumbs
						 :items="breadcrumbs"

					>
					</v-breadcrumbs>
				</div>

				<div class="product__info">
					<v-img :src="product.img"
					       max-height="300px"
					       max-width="300px"

					/>
					<v-card height="100%"
					        width="100%"
					        variant="flat"

					>
						<v-card-title>{{ product.title }}</v-card-title>
						<v-card-text>{{ product.description }}</v-card-text>

						<v-card-item>
							<v-chip-group
								 column
								 v-model="chosenSize"
							>
								<v-chip
									 filter
									 :value="size"
									 variant="outlined"
									 v-for="size in product.sizes"
									 width="30px"
								>{{ size }}
								</v-chip>
							</v-chip-group>
						</v-card-item>
						<v-card-item>
							<v-btn variant="outlined"
							       width="100%"
							       @click="add"
							       v-if="!inCart"
							       :disabled="chosenSize === ''"
							>Add to cart | {{ product.price }}$
							</v-btn>
							<v-btn variant="tonal"
							       v-else
							       width="100%"
							>Go To Cart
							</v-btn>

							<v-btn
								 variant="outlined"
								 v-if="inCart"
								 width="100%"
								 class="mt-2"
								 @click="remove"
							>
								Remove
							</v-btn>
						</v-card-item>
					</v-card>
				</div>


			</div>


		</v-fade-transition>

	</v-no-ssr>

</template>

<script setup>
import useProducts from "~/composables/useProducts";
import useCart from "~/composables/useCart";

const route = useRoute()

const link = `/api/product/${route.params.category}/${route.params.id}`

const {getProduct} = useProducts()
const cartStore = useCart()
const chosenSize = ref("")

const {data: product, pending: isLoaded} = useLazyAsyncData('product', () => $fetch(link,{
	method: 'GET',
}))


const breadcrumbs = computed(() => [
	{
		title: 'Главная',
		href: '/'
	},
	{
		title: product.value?.categoryName,
		href: `/${product.value?.categoryHref}`
	},
	{
		title: product.value?.title,
	}
])


const inCart = computed(() => {
	let exist = false
	cartStore.cart.map(i => {
		if (i.id === product.value.id && i.size === chosenSize.value) {
			exist = true
		}
	})
	return exist
})


watch(
	 () => product,
	 () => console.log(product.value),
	 {deep: true}
)
const add = () => {
	const {id, title, img, categoryHref, price} = product.value
	const href = `/${categoryHref}/${id}`
	if (chosenSize.value !== '')
		cartStore.addToCart({
			id, title, img, categoryHref, href, price,
			size: chosenSize.value
		})
}

const remove = () => {
	cartStore.removeFromCart(product.value.id, chosenSize.value)
}
</script>

<style scoped lang="scss">

.product {
	&__info {
		display: grid;
		grid-template-columns: 50% 50%;
	}
}


</style>