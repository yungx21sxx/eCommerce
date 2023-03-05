export default () => {

	const getRequest = (id, link, body = {}) => useLazyAsyncData(id, () => $fetch(link,{
		method: 'GET',
		body: body
	}))

	const getProduct = (categoryHref, productId) => {
		return getRequest('product', `/api/product/${categoryHref}/${productId}`)
	}
	const getCategoriesInfo = () => getRequest('categories-info', '/api/categories')

	const getProductsCategory = (categoryHref) => getRequest('category', `/api/product/${categoryHref}`)

	const getPagesNum = () => getRequest('page-num', '/api/products/pages-num')

	return {
		getProduct,
		getCategoriesInfo,
		getProductsCategory,
		getPagesNum
	}
}