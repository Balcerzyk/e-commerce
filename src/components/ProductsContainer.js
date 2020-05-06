import React from 'react';
import { connect } from 'react-redux';
import Product from './Product'

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
            <Product product={product} />
          </div>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
    productsState: state.products
})

export default connect(mapStateToProps, {}) (ProductsContainer);