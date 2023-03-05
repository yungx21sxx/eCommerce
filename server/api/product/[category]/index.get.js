import getProductsCategory from "~/server/db/getProductsCategory";
export default defineEventHandler(event => {
	const category = event.context.params.category
	return getProductsCategory(category)
})