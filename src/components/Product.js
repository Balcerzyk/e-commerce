import React from 'react';
import actions from '../app/cart/duck/actions'
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from '../components/img';

const styles = {
  main: {
    height: '400px',
    width: '300px',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '15% 45% 10% 20% 10%',
    gridTemplateAreas: "'title' 'img' 'price' 'desc' 'button'",
    backgroundColor: 'white',
    margin:'15px',
    padding: '15px',
    borderRadius: '15px',
    boxShadow: '4px 4px 16px 1px rgba(0,0,0,0.15)',
  },
  title: {
    gridArea: 'title',
    margin: 'auto',
    fontSize: 20,
  },
  img: {
    gridArea: 'img',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    gridArea: 'price',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cc3300',
    margin: 'auto auto auto 0',
  },
  desc: {
    gridArea: 'desc',
  },
  buttonDiv: {
    gridArea: 'button',
    margin: 'auto',
  },
  button: {
    margin: '20px 20px auto 10px', 
    padding: '5px 30px', 
    backgroundColor: '#4aa6ff', 
    color: 'white', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

const Product = (props) =>{
  return(
    <div style={styles.main}>
      <div style={styles.title}>
        <a>{props.product.title}</a>
      </div>
      <div style={styles.img}>
        <Link to={"/product?id=" + props.product._id}>
          <img src={"http://127.0.0.1:3000/images/" + props.product.img} style={{maxHeight: '80%', maxWidth: '100%', margin: 'auto'}}/>
        </Link>
      </div>
      <div style={styles.price}>
        <a>{props.product.price} zł</a>
      </div>
      <div style={styles.desc}>
        <a>{props.product.desc}</a>
      </div>
      <div style={styles.buttonDiv}>
        <button style={styles.button} onClick={() => {
          props.add(props.product);
          }}>Dodaj do koszyka
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
    productsState: state.products
})

const mapDispatchToProps = dispatch => ({
  add: (cartProduct) => dispatch(actions.add(cartProduct))
})

export default connect(mapStateToProps, mapDispatchToProps) (Product);