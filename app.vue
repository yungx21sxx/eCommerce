<template>
	<v-layout>
		<NavBar/>
		<v-main>
			<div class="wrapper">
				<NuxtPage/>
			</div>

		</v-main>
	</v-layout>

</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
import useCart from "~/composables/useCart";

const cartStore = useCart()

watch(
	 () => cartStore.cart,
	 (cart) => localStorage.setItem('cart', JSON.stringify(cart)),
	 {deep: true}
)

onBeforeMount(() => {
	const cartJSON = localStorage.getItem('cart')
	if (cartJSON) {
		cartStore.cart = JSON.parse(cartJSON)
	}

})



</script>

<style lang="scss">

.wrapper {
	padding: 0 10px;
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
}

</style>
