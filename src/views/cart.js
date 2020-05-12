import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const styles = {
  container: {
    height: '70px',
    width: '800px',
    margin: '10px auto',
    backgroundColor: '#eeeeee',
    borderRadius: '15px',
    display: 'grid',
    gridTemplateColumns: '100px auto 100px',
    gridTemplateAreas: "'img titleAndPrice button'",
  },
  img: {
    gridArea: 'img',
    height: '50px',
    margin: 'auto',
  },
  titleAndPrice: {
    gridArea: 'titleAndPrice',
    margin: 'auto auto auto 10px',
  },
  button: {
    gridArea: 'button',
    margin: 'auto',
  }
  
}

const ProductsContainer = (props) =>{

  let products = props.cartState.cartProducts;
  return(
    <div>
      {props.cartState.cartProducts.map((product, index) => 
        <div style={styles.container}>
          <img style={styles.img} src={require("../images/redCircle.svg")}/>
          <div style={styles.titleAndPrice}>
            {product.title}<br/>
            {product.price} zł
          </div>
          <button style={styles.button} onClick={() => {
            products[index] = 'toRemove';
            props.remove(products[index]);
          }}>Usuń</button>
        </div>
      )}
      <button onClick={() => {
        props.reset();
      }}>Usuń wszystko</button>
      <Link to={"/checkout"}><button>Złóż zamówienie</button></Link> 
    </div>
  )
}



const mapStateToProps = state => ({
    cartState: state.cart
})

const mapDispatchToProps = dispatch => ({
  add: (cartProduct) => dispatch(actions.add(cartProduct)),
  reset: () => dispatch(actions.reset()),
  remove: (cartProduct) => dispatch(actions.remove(cartProduct))
})

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);