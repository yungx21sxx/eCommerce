import getAllProducts from "~/server/db/getAllProducts";

export default defineEventHandler(event => {
	const products = getAllProducts()
	return products.find(i => i.id == event.context.params.id)
})