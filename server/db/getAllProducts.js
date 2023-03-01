import categories from "~/server/db/db";

export default () => {
	const products = []
	for (const category of categories) {
		for (const product of category.products) {
			products.push({
				categoryID: category.id,
				categoryName: category.name,
				...product
			})
		}
	}

	return products

}