import React from 'react'
import Home from './views/home.js'
import Cart from './views/cart.js'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header.js';

class App extends React.Component {
    
  render() {
    return (

      <Router>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
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
