import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    console.log(this.props.cartState.cartProducts.length)
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
      console.log(idString)
    }
    return idString;
  }

  form = () => {
    return(
      <div style={styles.container}>
        {this.checkCart()}
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
            
            <button style={styles.button} onClick={() => {this.setState({...this.state, display: "sum"})}}>Dalej</button>
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
          <div style={{gridArea: "data", display: "grid"}}>
            <a style={{margin: "0 auto 20px 0"}}>Imię:</a><a  style={styles.sumData}>{this.state.firstName}</a><br/>
            <a style={{margin: "10px 0"}}>Nazwisko:</a><a  style={styles.sumData}>{this.state.lastName}</a><br/>
            <a style={{margin: "10px 0"}}>Email:</a><a  style={styles.sumData}>{this.state.email}</a><br/>
            <a style={{margin: "10px 0"}}>Kraj:</a><a  style={styles.sumData}>{this.state.country}</a><br/>
            <a style={{margin: "10px 0"}}>Miasto:</a><a  style={styles.sumData}>{this.state.city}</a><br/>
            <a style={{margin: "10px 0"}}>Kod pocztowy:</a><a  style={styles.sumData}>{this.state.postCode}</a><br/>
            <a style={{margin: "10px 0"}}>Adres:</a><a  style={styles.sumData}>{this.state.address}</a><br/>
          </div>
          <div style={{margin: '0 auto', gridArea: "products", textAlign: "right"}}>
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
        <button style={styles.acceptButton} onClick={() => {{this.props.reset()}; this.setState({...this.state, display: "payment"})}}>Zamawiam i płacę</button>
      </div>  
    )
  }

  payment = () => {
    return(
      <div>
        <div style={{textAlign: "center", margin: "20px"}}>Dane do przelewu</div>
        <div style={styles.table}>
          <div style={{gridArea: "paymentTitleCaption"}}>Tytuł:</div> 
          <div style={{gridArea: "paymentTitle"}}>{this.state.email + Date.now()}</div>
          <div style={{gridArea: "accountNumberCaption"}}>Numer konta:</div> 
          <div style={{gridArea: "accountNumber"}}>2424 2424 2424 2424 2424 2424</div>
          <div style={{gridArea: "recipientCaption"}}>Odbiorca:</div> 
          <div style={{gridArea: "recipient"}}>Michał Balcerski</div> 
          <div style={{gridArea: "priceCapiton"}}>Kwota:</div> 
          <div style={{gridArea: "price"}}>{this.sumPriceFunction()}</div>  
        </div>
        <div style={{textAlign: "center", margin: "40px"}}>Przygotowanie paczki rozpoczniemy zaraz po zaksięgowaniu wpłaty.</div>
        <form action="http://formspree.io/orzechos26@gmail.com" method="POST">
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