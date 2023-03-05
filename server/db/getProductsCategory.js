import products from "~/server/db/db";

export default (categoryHref) => {
	const category = products.find(i => i.href === categoryHref)
	category.products = category.products.map(product => ({
		categoryHref: category.href,
		categoryName: category.name,
		...product
	}))
	return category

}