import products from "~/server/db/db";

export default () => products.map(category => ({
	name: category.name,
	href: category.href,
}))