import React from 'react';
import { connect } from 'react-redux';
import Product from './Product'

const styles = {
  container: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}

const ProductsContainer = (props) =>{

  return ( 
    <div style={styles.container}>
      {props.productsState.products.map(product =>   
            <Product product={product} />
      )}
    </div>
  )
}
const mapStateToProps = state => ({
    productsState: state.products
})

export default connect(mapStateToProps, {}) (ProductsContainer);