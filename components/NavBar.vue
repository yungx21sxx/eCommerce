<template>
	<v-app-bar>
		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

		<v-app-bar-title>Supreme</v-app-bar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<v-btn icon href="/cart">
			<v-badge :content="cartStore.cartLength">
				<v-icon>mdi-cart</v-icon>
			</v-badge>
		</v-btn>



		<v-btn icon>
			<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
	</v-app-bar>
	<v-navigation-drawer
		 v-model="drawer"
		 temporary
	>

		<v-list density="compact" nav>

			<v-list-item
				 title="Home"
				 href="/"
			/>
			<v-list-item
				 title="All Products"
				 href="/all"
			/>
			<v-list-item
				 v-for="category in categories"
				 :key="category.href"
				 :title="category.name"
				 :href=" '/' + category.href"
			/>





		</v-list>
	</v-navigation-drawer>
</template>

<script setup>
	import useProducts from "~/composables/useProducts";
	import useCart from "~/composables/useCart";


	const drawer = ref(false)

	const {getCategoriesInfo} = useProducts()
	const cartStore = useCart()
	const {data: categories} = await getCategoriesInfo()


</script>

<style scoped>

</style>