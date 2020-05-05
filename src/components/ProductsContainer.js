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
              let array = JSON.parse(localStorage.getItem("cart"))
              if(array) array.push(product)
              else array = [product];
              localStorage.setItem("cart", JSON.stringify(array));
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