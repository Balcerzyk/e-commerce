import { combineReducers } from 'redux'
import productsReducer from './app/products/duck'
import cartReducer from './app/cart/duck'

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default rootReducer;