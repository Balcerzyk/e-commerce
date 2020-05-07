import React from 'react'
import { connect } from 'react-redux';
import Product from '../components/Product'

const ProductSite = (props) =>{
  const productId = new URLSearchParams(window.location.search).get('id');
  console.log(productId);

  if(props.productsState.products[productId])
    return( 
      <div>
        <a>{props.productsState.products[productId].title}</a><br/> 
        <a>{props.productsState.products[productId].price}</a><br/> 
        <a>{props.productsState.products[productId].desc}</a>
      </div>
    )
  else return <div>Produkt nie istnieje</div>
}

const mapStateToProps = state => ({
    productsState: state.products
})

export default connect(mapStateToProps, {}) (ProductSite);


