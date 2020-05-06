import React from 'react';
import actions from '../app/cart/duck/actions'
import { connect } from 'react-redux';
import Img from 'react-image'

const styles = {
  main: {
    height: '400px',
    width: '300px',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '10% 35% 10% 40% 5%',
    gridTemplateAreas: "'title' 'img' 'price' 'desc' 'button'",
    backgroundColor: 'gray', 
  },
  title: {

  },
  img: {
    height: '90%',
  },
  price: {

  },
  desc: {

  },
  button: {

  },
  
}

const Product = (props) =>{
  return(
    <div style={styles.main}>
      <div style={{gridArea: 'title'}}>
        <a style={styles.title}>{props.product.title}</a>
      </div>
      <div style={{gridArea: 'img'}}>
        <img style={styles.img} src={require("../images/redCircle.svg")}/>
      </div>
      <div style={{gridArea: 'price'}}>
        <a style={styles.price}>{props.product.price}</a>
      </div>
      <div style={{gridArea: 'desc'}}>
        <a style={styles.desc}>{props.product.desc}</a>
      </div>
      <div style={{gridArea: 'button'}}>
        <button style={styles.button} onClick={() => {
          props.add(props.product);
          let array = JSON.parse(localStorage.getItem("cart"))
          if(array) array.push(props.product)
          else array = [props.product];
          localStorage.setItem("cart", JSON.stringify(array));
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