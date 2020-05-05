import types from './types'

const data = require('../../../data.json');

const INITIAL_STATE = {
    products: data.products
  }

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RESET_PRODUCTS: 
      return {...state, products: []}
    case types.ADD_PRODUCT: 
      return {...state, products: [...state.products, action.item]}
    default:
      return state
  }
}

export default productsReducer;