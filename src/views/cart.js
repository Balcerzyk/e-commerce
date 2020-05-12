import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from '../components/img';

const styles = {
  container: {
    height: '70px',
    width: '100%',
    maxWidth: '800px',
    margin: '10px auto',
    padding: '10px 0',
    backgroundColor: 'white',
    borderRadius: '15px',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr',
    gridTemplateAreas: "'img titleAndPrice button'",
    boxShadow: '4px 4px 5px 1px rgba(0,0,0,0.15)',
  },
  img: {
    gridArea: 'img',
    height: '50px',
    margin: 'auto',
  },
  titleAndPrice: {
    gridArea: 'titleAndPrice',
    margin: 'auto auto auto 40px',
  },
  button: {
    gridArea: 'button',
    margin: 'auto',
    backgroundColor: '#cc3300',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',

  },
  removeAllButton: {
    margin: '20px auto 30px 10px',
    backgroundColor: '#cc3300',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    
  },
  checkoutButton: {
    margin: '20px 10px 30px auto',
    backgroundColor: '#33cc33',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  return: {
    margin: '20px auto auto 20px', 
    padding: '5px 30px', 
    backgroundColor: '#4aa6ff', 
    color: 'white', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  
}

const ProductsContainer = (props) =>{

  let products = props.cartState.cartProducts;

  const buttons = () => {
    if(props.cartState.cartProducts.length > 0){
      return (
        <div style={{width: '100%', margin: 'auto', display: 'flex'}}>
          <button style={styles.removeAllButton} onClick={() => {
            props.reset();
          }}>Usuń wszystko</button>
          <Link to={"/checkout"}> <button style={styles.checkoutButton}>Złóż zamówienie</button></Link> 
        </div>
      )
    }
    else return <h3 style={{margin: '30px auto', display: 'table', ontSize: '20px', fontWeight: 'bold', color: '#cc3300'}}>Brak produktów w koszyku</h3>
  }
  
  return(
    <div>
      <Link to={"/"}> <button style={styles.return}>Powrót</button></Link>
      <div style={{width: '50%', maxWidth: '800px', margin: 'auto'}}>
        {props.cartState.cartProducts.map((product, index) => 
          <div style={styles.container}>
            <Link to={"/product?id=" + product.id} style={{textAlign: 'center'}}>
              <Image src={product.img} style={{maxHeight: '100%', maxWidth: '100%', margin: 'auto'}}/>
            </Link>
            <div style={styles.titleAndPrice}>
            <Link to={"/product?id=" + product.id} style={{textDecoration: 'none'}}><a style={{fontSize: 20, color: 'black'}}>{product.title}</a><br/></Link>
              <a style={{fontWeight: 'bold', color: '#cc3300'}}>{product.price} zł</a>
            </div>
            <button style={styles.button} onClick={() => {
              products[index] = 'toRemove';
              props.remove(products[index]);
            }}>Usuń</button>
          </div>
        )}
        {buttons()}
      </div>
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