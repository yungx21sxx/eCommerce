import categories from "~/server/db/db";
import getProductsCategory from "~/server/db/getProductsCategory";

export default (categoryHref, productID) => {
	const productsCategory = getProductsCategory(categoryHref)
	return {
		...productsCategory.products.find(i => i.id == productID),
		categoryHref: productsCategory.href,
		categoryName: productsCategory.name,
	}
}

