import types from './types'

const add = item => ({
    type: types.ADD_PRODUCT, item
})

const reset = item => ({
    type: types.RESET_PRODUCTS
})

const init = item => ({
    type: types.INIT_PRODUCTS, item
})

export default {
    add,
    reset,
    init
}