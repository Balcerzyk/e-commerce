import types from './types'

const data = localStorage.getItem("cart");
let INITIAL_STATE;

if(data){
  INITIAL_STATE = {
    cartProducts: JSON.parse(data)
  }
}
else INITIAL_STATE = {
  cartProducts: []
}
  

const cartReducer = (state = INITIAL_STATE, action) => {
  let newState

  switch (action.type) {
    case types.RESET_CART:
      localStorage.clear("cart") 
      return {...state, cartProducts: []}
    case types.ADD_TO_CART:
      newState = {...state, cartProducts: [...state.cartProducts, action.item]};
      localStorage.setItem("cart", JSON.stringify(newState.cartProducts));
      return newState;
    case types.DELETE_FROM_CART:
      newState = { ...state, cartProducts: state.cartProducts.filter(prod => prod !== "toRemove")}
      localStorage.setItem("cart", JSON.stringify(newState.cartProducts));    
      return newState;
    default:
      return state
  }
}

export default cartReducer;
