export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTER_PRODUCT = 'FILTER_PRODUCT'

export const selectedProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id
})

export const filterProduct = (id) => ({
    type: FILTER_PRODUCT,
    categoryId: id
})
