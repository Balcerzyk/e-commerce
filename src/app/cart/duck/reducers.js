import types from './types'

const INITIAL_STATE = {
    cartProducts: []
  }

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RESET_CART: 
      return {...state, cartProducts: []}
    case types.ADD_TO_CART: 
      return {...state, cartProducts: [...state.cartProducts, action.item]}
    default:
      return state
  }
}

export default cartReducer;