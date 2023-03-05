import {defineStore} from "pinia";




export default defineStore('cart',() => {
	const cart = ref([])
	const addToCart = (product) => {
		let inCart = false
		cart.value.map(i => {
			if (i.id === product.id && i.size === product.size) {
				inCart = true
			}
		})

		if (!inCart) {
			cart.value.push({...product, amount: 1})
		}

		console.log(inCart)
	}
	const removeFromCart = (id, size) => {
		cart.value = cart.value.filter(i => i.id !== id || i.size !== size)
	}


	const cartLength = computed(() => cart.value.length)
	const cartTotal = computed(() => cart.value.reduce((acc, i) => acc + i.price, 0))

	return {
		addToCart,
		cartLength,
		cart,
		cartTotal,
		removeFromCart
	}


})
