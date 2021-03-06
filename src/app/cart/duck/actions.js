import types from './types'

const add = item => ({
    type: types.ADD_TO_CART, item
})

const remove = item => ({
    type: types.DELETE_FROM_CART, item
})

const reset = item => ({
    type: types.RESET_CART
})

export default {
    add,
    reset,
    remove
}