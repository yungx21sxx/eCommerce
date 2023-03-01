import getAllProducts from "~/server/db/getAllProducts";

export default defineEventHandler(async event => {
	return getAllProducts()
})