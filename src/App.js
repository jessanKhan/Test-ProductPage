import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import product from './components/product';
import Cart from './components/cart/cart'




class App extends Component {

  render() {
    return (
      <div className="container">
        <Nav />
        <Switch>
          <Route path='/' component={product} exact />
          <Route path='/cart/' component={Cart} exact />
        </Switch>
        <div className="footer my-5">

        </div>
      </div>
    );
  }
}

export default App;