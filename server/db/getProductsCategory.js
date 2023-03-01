import products from "~/server/db/db";

export default (category) => {
	const categoryProducts = products.find(i => i.id === category)
	return categoryProducts.products
}