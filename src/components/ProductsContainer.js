import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  productDiv: {
    width: '300px',
    height: '300px',
    backgroundColor: 'red',
    margin: '15px',
  },
}

const ProductsContainer = (props) =>{

  return ( 
    <div style={styles.container}>
      {props.productsState.products.map(product => 
          <div style={styles.productDiv}>
            {product.title}
            <button onClick={() => {
              props.add(product);
              let old = localStorage.getItem("cart"); 
              if(old) localStorage.setItem("cart", JSON.stringify(old.concat(product)));
              else localStorage.setItem("cart", JSON.stringify(product));
            }}>Dodaj do koszyka</button>
          </div>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
    productsState: state.products
})

const mapDispatchToProps = dispatch => ({
  add: (cartProduct) => dispatch(actions.add(cartProduct))
})

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);