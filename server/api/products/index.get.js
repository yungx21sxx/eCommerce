import getAllProducts from "~/server/db/getAllProducts";


export default defineEventHandler(event => {
	const {page} = getQuery(event)
	const products = getAllProducts()
	let start = 0
	let end = 12
	if (+page > 1) {
		start = 12 * (+page - 1)
		end = 12 * (+page)
	}
	console.log(start, end)
	return products.slice(start, end)
})