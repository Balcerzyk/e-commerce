import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import logo from '../images/bql_logo.svg'
import cart from '../images/cart.svg'
import redCircle from '../images/redCircle.svg'

const styles = {
  main: {
    height: '80px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '200px auto 100px',
    gridTemplateAreas: "'logo categories cart'",
    backgroundColor: '#4AA6FF',
    margin: 0,
    boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.22)',
  },
  logo: {
    gridArea: 'logo',
    height: '70px',
    margin: 'auto',
  },
  cart: {
    gridArea: 'cart',
    margin: 'auto',
    position: 'relative'
  },
  cartIcon: {
    height: '30px',
    margin: 'auto',
  },
  redCircleDiv: {
    height: '15px',
    width: '15px',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  redCircle: {
    height: '100%',
    width: '100%',
  },
  counter: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, 0%)',
    fontSize: 10,
    color: 'white',
  }
}

const Header = ({cartState}) =>{

  return(
    <div style={styles.main}>
      <Link to="/">
        <img src={logo} style={styles.logo}/> 
      </Link>
      <Link to="/panel">
        <a>Panel</a>
      </Link>
      <Link to="/cart" style={styles.cart}>
        <img src={cart} style={styles.cartIcon}/>
        <div style={styles.redCircleDiv}>
          <a style={styles.counter}>{cartState.cartProducts.length}</a>
          <img src={redCircle} style={styles.redCircle}/>
        </div>  
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  cartState: state.cart
})

export default connect(mapStateToProps, {}) (Header);