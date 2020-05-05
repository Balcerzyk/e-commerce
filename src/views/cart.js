import React from 'react';
import { connect } from 'react-redux';


const ProductsContainer = ({cartState}) =>
<div>
  {cartState.cartProducts.map(product => 
    <div>
      {product.title}
    </div>
  )}
</div>

const mapStateToProps = state => ({
    cartState: state.cart
})
export default connect(mapStateToProps, {}) (ProductsContainer);