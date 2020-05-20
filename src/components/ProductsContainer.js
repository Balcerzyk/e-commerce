import React from 'react';
import { connect } from 'react-redux';
import Product from './Product'
import api from '../api'
import actions from '../app/products/duck/actions'

const styles = {
  container: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}

function ProductsContainer (props) {
  const [loading, setLoading] = React.useState(1);


    if(loading){
      api.getAllProducts().then(prod => {
        props.init({products: prod.data.data});
        setLoading(0);
      })
    }

  return ( 
    (loading) ? <a>lel</a> :
    <div style={styles.container}>
      {console.log()}
      {props.productsState.products.map(product =>   
            <Product product={product} />
      )}
    </div>
  )
}
const mapStateToProps = state => ({
    productsState: state.products
})

const mapDispatchToProps = dispatch => ({
  init: (products) => dispatch(actions.init(products))
})

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);