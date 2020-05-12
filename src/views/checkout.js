import React from 'react';
import { connect } from 'react-redux';
import actions from '../app/cart/duck/actions'

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
    };
  }

  changeFirstName = (event) => this.setState({firstName: event.target.value});
  changelastName = (event) => this.setState({lastName: event.target.value});
  changeemail = (event) => this.setState({email: event.target.value});
  changecountry = (event) => this.setState({country: event.target.value});
  changeCity = (event) => this.setState({city: event.target.value});
  changePostcode = (event) => this.setState({postCode: event.target.value});
  changeAddress = (event) => this.setState({address: event.target.value});

  handleSubmit = (event) => {
    alert('Podano następujące imię: ' + this.state.value);
    event.preventDefault();
  }

  form = () => {
    return(
      <div style={styles.container}>
        <form>
          <div style={styles.personal}>
            <label>
            <a style={styles.labelText}>Imię:</a><br/>
              <input style={styles.input} type="text" required value={this.state.firstName} onChange={this.changeFirstName} /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Nazwisko:</a><br/>
              <input style={styles.input} type="text" required name="lastName" /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Email:</a><br/>
              <input style={styles.input} type="text" required name="email" /><br/>
            </label>
          </div>
          <div style={styles.personal}>
            <label>
            <a style={styles.labelText}>Kraj:</a><br/>
              <input style={styles.input} type="text" required name="country" /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Miasto:</a><br/>
              <input style={styles.input} type="text" required name="city" /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Kod pocztowy:</a><br/>
              <input style={styles.input} type="text" required name="postCode" /><br/>
            </label>
            <label>
            <a style={styles.labelText}>Adres:</a><br/>
              <input style={styles.input} type="text" required name="address" /><br/>
            </label>
            <input style={styles.button} type="submit" value="Dalej" onClick={() => alert('lel')} />
          </div>
        </form>
      </div>
    )
  }

  sum = () => {
    return(
      <div>
        {console.log(this.state.display)}
        <button onClick={() => this.setState({display: 'form'})}>Powrót</button>
        sum
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

export default Checkout