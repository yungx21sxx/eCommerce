import getAllProducts from "~/server/db/getAllProducts";
import getProductsCategory from "~/server/db/getProductsCategory";
import getProduct from "~/server/db/getProduct";

export default defineEventHandler(event => {
	const {category, id} = event.context.params
	return getProduct(category, id)
})