import types from './types'

const add = item => ({
    type: types.ADD_PRODUCT, item
})

const reset = item => ({
    type: types.RESET_PRODUCTS
})

export default {
    add,
    reset
}