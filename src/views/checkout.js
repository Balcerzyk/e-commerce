import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const styles = {
  container: {
    width: '80%',
    margin: 'auto',

  },
  personal: {
    backgroundColor: '#dddddd',
    borderRadius: '15px',
    margin: '20px auto',
    padding: '30px',
    maxWidth: '600px',
  },
  button: {
    margin: '20px auto 0 auto'
  },
  input: {
    margin: '10px auto',
    width: '100%',
    height: '40px',
    border: 'none',
    backgroundColor: '#eeeeee',
    borderRadius: '8px',
  },
  labelText: {
    margin: 'auto auto auto 0',
    textAlign: 'left',
  },
}

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'form',
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      city: '',
      postCode: '',
      address: '',
      products: props.cartState.cartProducts
    };
  }

  changeFirstname = (event) => this.setState({...this.state, firstName: event.target.value});
  changeLastname = (event) => this.setState({...this.state, lastName: event.target.value});
  changeEmail = (event) => this.setState({...this.state, email: event.target.value});
  changeCountry = (event) => this.setState({...this.state, country: event.target.value});
  changeCity = (event) => this.setState({...this.state, city: event.target.value});
  changePostcode = (event) => this.setState({...this.state, postCode: event.target.value});
  changeAddress = (event) => this.setState({...this.state, address: event.target.value});

  handleSubmit = (event) => {
    alert('Podano następujące imię: ' + this.state.value);
    event.preventDefault();
  }

  form = () => {
    return(
      <div style={styles.container}>
          <div style={styles.personal}>
            <label>
            <a style={styles.labelText}>Imię:</a><br/>
              <input style={styles.input} type="text" required value={this.state.firstName} onChange={this.changeFirstname} /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Nazwisko:</a><br/>
              <input style={styles.input} type="text" required value={this.state.lastName} onChange={this.changeLastname} /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Email:</a><br/>
              <input style={styles.input} type="text" required value={this.state.email} onChange={this.changeEmail} /><br/>
            </label>
          </div>
          <div style={styles.personal}>
            <label>
            <a style={styles.labelText}>Kraj:</a><br/>
              <input style={styles.input} type="text" required value={this.state.country} onChange={this.changeCountry} /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Miasto:</a><br/>
              <input style={styles.input} type="text" required value={this.state.city} onChange={this.changeCity} /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Kod pocztowy:</a><br/>
              <input style={styles.input} type="text" required value={this.state.postCode} onChange={this.changePostcode} /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Adres:</a><br/>
              <input style={styles.input} type="text" required value={this.state.address} onChange={this.changeAddress} /><br/>
            </label>
            
            <button style={styles.button} onClick={() => this.setState({...this.state, display: "sum"})}>Dalej</button>
          </div>
      </div>
    )
  }

  sum = (props) => {
    return(
      <div>
        <div>
            <button onClick={() => this.setState({display: 'form'})}>Powrót</button>
            <div style={styles.sum}>
              <a style={styles.sumCat}>Imię:</a><a  style={styles.sumData}>{this.state.firstName}</a>
              <a style={styles.labelText}>Nazwisko:</a><a  style={styles.sumData}>{this.state.lastName}</a>
              <a style={styles.labelText}>Email:</a><a  style={styles.sumData}>{this.state.email}</a>
              <a style={styles.labelText}>Kraj:</a><a  style={styles.sumData}>{this.state.country}</a>
              <a style={styles.labelText}>Miasto:</a><a  style={styles.sumData}>{this.state.city}</a>
              <a style={styles.labelText}>Kod pocztowy:</a><a  style={styles.sumData}>{this.state.postCode}</a>
              <a style={styles.labelText}>Adres:</a><a  style={styles.sumData}>{this.state.address}</a>
            </div>
        </div>
        <div>
          <div style={{width: '50%', maxWidth: '800px', margin: 'auto'}}>
            {this.state.products.map((product, index) => 
              <div style={styles.container}>
                <Link to={"/product?id=" + product.id} style={{textAlign: 'center'}}>
                  
                </Link>
                <div style={styles.titleAndPrice}>
                <Link to={"/product?id=" + product.id} style={{textDecoration: 'none'}}><a style={{fontSize: 20, color: 'black'}}>{product.title}</a><br/></Link>
                  <a style={{fontWeight: 'bold', color: '#cc3300'}}>{product.price} zł</a>
                </div>
              </div>
            )}
          </div>
        </div>
        <button style={styles.button} onClick={() => this.setState({...this.state, display: "payment"})}>Zamawiam i płacę</button>
      </div>  
    )
  }

  payment = () => {
    return(
      <div>
        {console.log(this.state.display)}
        <button onClick={() => this.setState({display: 'sum'})}>Powrót</button>
        payment
      </div>
    )
  }

  render() {
    return (
      (this.state.display == 'form') ? this.form() : (this.state.display == 'sum') ? this.sum() : this.payment()
    );
  }
}

const mapStateToProps = state => ({
  cartState: state.cart
})


export default connect(mapStateToProps, {}) (Checkout);