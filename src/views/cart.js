import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'

const ProductsContainer = (props) =>
<div>
  {props.cartState.cartProducts.map(product => 
    <div>
      {product.title}
    </div>
  )}
  <button onClick={() => {
    props.reset();
    localStorage.clear("cart");
  }}>Usuń wszystko</button>
</div>

const mapStateToProps = state => ({
    cartState: state.cart
})

const mapDispatchToProps = dispatch => ({
  add: (cartProduct) => dispatch(actions.add(cartProduct)),
  reset: () => dispatch(actions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);