import types from './types'

const productsReducer = (state, action) => {
  if(!state){
    state = {
      products: []
    }
  }
  switch (action.type) {
    case types.RESET_PRODUCTS: 
      return {...state, products: []}
    case types.ADD_PRODUCT: 
      return {...state, products: [...state.products, action.item]}
    case types.INIT_PRODUCTS: 
      return action.item
    default:
      return state
  }
}

export default productsReducer;