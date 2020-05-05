import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  productDiv: {
    width: '300px',
    height: '300px',
    backgroundColor: 'red',
    margin: '15px',
  },
}

const Header = () =>
<div>
    <Link to="/cart">Koszyk</Link>
</div>

export default Header;