import types from './types'

const data = localStorage.getItem("cart");
let INITIAL_STATE;
//localStorage.clear("cart");
if(data){
  INITIAL_STATE = {
    cartProducts: JSON.parse(data)
  }
}
else INITIAL_STATE = {
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