import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'


const styles = {
  container: {
    width: '80%',
    margin: '20px auto',
    
  },
  bigContainter: {
    margin: "auto",
    width: "60%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: "'data products'",
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
  table: {
    padding: "20px",
    margin: "auto",
    backgroundColor: "white",
    width: "40%",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    border: "solid 1px",
    gridTemplateRoes: "50px",
    gridGap: "20px 0",
    textAlign: "left",
    gridTemplateAreas: 
    "'paymentTitleCaption paymentTitle' 'accountNumberCaption accountNumber' 'recipientCaption recipient' 'priceCapiton price'"
  },
  acceptButton: {
    margin: 'auto',
    display: "flex",
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
      products: props.cartState.cartProducts,
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

  checkCart = () => {
    if(!this.props.cartState.cartProducts.length) window.location.href = "/";
  }

  sumPriceFunction = () => {
    let price = 0;
    for(let i=0; i<this.state.products.length; i++) {
      price += this.state.products[i].price;
    }
    return price;
  }

  getProductsIds  = () => {
    let idString = "";
    for(let i=0; i<this.state.products.length; i++) {
      idString += this.state.products[i]._id + "| |";
    }
    return idString;
  }

  form = () => {
    return(
      <div style={styles.container}>
        {this.checkCart()}
          <div style={styles.personal}>
            <label style={{display: "block"}}>
            <a style={styles.labelText}>Imię:</a><br/>
              <input style={styles.input} type="text" required value={this.state.firstName} onChange={this.changeFirstname} /><br/>
            </label>
            <label style={{display: "block"}}>
            <a style={styles.labelText}>Nazwisko:</a><br/>
              <input style={styles.input} type="text" required value={this.state.lastName} onChange={this.changeLastname} /><br/>
            </label>
            <label style={{display: "block"}}>
            <a style={styles.labelText}>Email:</a><br/>
              <input style={styles.input} type="text" required value={this.state.email} onChange={this.changeEmail} /><br/>
            </label>
          </div>
          <div style={styles.personal}>
            <label style={{display: "block"}}>
            <a style={styles.labelText}>Kraj:</a><br/>
              <input style={styles.input} type="text" required value={this.state.country} onChange={this.changeCountry} /><br/>
            </label>
            <label style={{display: "block"}}>
            <a style={styles.labelText}>Miasto:</a><br/>
              <input style={styles.input} type="text" required value={this.state.city} onChange={this.changeCity} /><br/>
            </label>
            <label style={{display: "block"}}>
            <a style={styles.labelText}>Kod pocztowy:</a><br/>
              <input style={styles.input} type="text" required value={this.state.postCode} onChange={this.changePostcode} /><br/>
            </label>
            <label style={{display: "block"}}>
            <a style={styles.labelText}>Adres:</a><br/>
              <input style={styles.input} type="text" required value={this.state.address} onChange={this.changeAddress} /><br/>
            </label>
            
            <button style={styles.acceptButton} onClick={() => {this.setState({...this.state, display: "sum"})}}>Dalej</button>
          </div>
      </div>
    )
  }

  sum = (props) => {
    return(
      <div style={{margin: "auto"}}>
        {this.sumPriceFunction}
        <button onClick={() => this.setState({display: 'form'})} style={styles.return}>Powrót</button>
        <div style={styles.bigContainter}>
        <Table striped bordered hover style={{width: "80%", margin: " 30px auto"}}>
          <tbody>
            <tr>
              <td>Imię:</td>
              <td>{this.state.firstName}</td>
            </tr>
            <tr>
              <td>Nazwisko:</td>
              <td>{this.state.lastName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <td>Kraj:</td>
              <td>{this.state.country}</td>
            </tr>
            <tr>
              <td>Miasto:</td>
              <td>{this.state.city}</td>
            </tr>
            <tr>
              <td>Kod pocztowy:</td>
              <td>{this.state.postCode}</td>
            </tr>
            <tr>
              <td>Adres:</td>
              <td>{this.state.address}</td>
            </tr>
            
          </tbody>
        </Table>
          
          <div style={{margin: '15px auto', gridArea: "products"}}>
            {this.state.products.map((product, index) => 
              <div style={{display: "flex", width: "300px", margin: "15px auto"}}>
                <div style={{marginRight: "20px"}}>
                  <Link to={"/product?id=" + product.id} style={{textAlign: 'center'}}>
                    <img src={"http://127.0.0.1:3000/images/" + product.img} style={{maxHeight: '70px', maxWidth: '100%', margin: 'auto'}}/>
                  </Link>
                </div>
                <div style={styles.titleAndPrice}>
                <Link to={"/product?id=" + product.id} style={{textDecoration: 'none'}}><a style={{fontSize: 20, color: 'black'}}>{product.title}</a><br/></Link>
                  <a style={{fontWeight: 'bold', color: '#cc3300'}}>{product.price} zł</a>
                </div>
              </div>
            )}
          </div>
        </div>
        <button style={styles.acceptButton} onClick={() => {{this.props.reset()}; this.setState({...this.state, display: "payment"})}}>Zamawiam i płacę</button>
      </div>  
    )
  }

  payment = () => {
    return(
      <div>
        <div style={{textAlign: "center", margin: "20px"}}>Dane do przelewu</div>
        <Table striped bordered hover style={{width: "50%", margin: "auto"}}>
          <tbody>
            <tr>
              <td>Tytuł:</td>
              <td>{this.state.email + Date.now()}</td>
            </tr>
            <tr>
              <td>Numer konta:</td>
              <td>2424 2424 2424 2424 2424 2424</td>
            </tr>
            <tr>
              <td>Odbiorca:</td>
              <td>Michał Balcerski</td>
            </tr>
            <tr>
              <td>Kwota:</td>
              <td>{this.sumPriceFunction()}</td>
            </tr>
            
          </tbody>
        </Table>
       
        <div style={{textAlign: "center", margin: "40px"}}>Przygotowanie paczki rozpoczniemy zaraz po zaksięgowaniu wpłaty.</div>
        <form action="http://formspree.io/ecomtest@onet.pl" method="POST">
          <input type="hidden" name="products" value={this.getProductsIds()}/>
          <input type="hidden" name="_replyto" value={this.state.email}/>
          <input type="hidden" name="name" value={this.state.firstName}/>
          <input type="hidden" name="lastname" value={this.state.lastName}/>
          <input type="hidden" name="country" value={this.state.country}/>
          <input type="hidden" name="city" value={this.state.city}/>
          <input type="hidden" name="postcode" value={this.state.postCode}/>
          <input type="hidden" name="address" value={this.state.address}/>
          <input type="submit" value="Potwierdzam" style={styles.acceptButton}/>
        </form>
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

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(actions.reset()),
})

export default connect(mapStateToProps, mapDispatchToProps) (Checkout);