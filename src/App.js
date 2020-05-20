import React from 'react'
import Home from './views/home.js'
import Cart from './views/cart.js'
import ProductSite from './views/productSite.js'
import Checkout from './views/checkout.js'
import Panel from './views/panel.js'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header.js';

class App extends React.Component {
    
  render() {
    return (

      <Router style={{fontFamily: 'roboto'}}>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/product">
            <ProductSite />
          </Route>
          <Route path="/panel">
            <Panel />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
