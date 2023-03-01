import getProducts from "~/server/db/getProductsCategory";
export default defineEventHandler(event => {
	const category = event.context.params.category
	return getProducts(category)
})