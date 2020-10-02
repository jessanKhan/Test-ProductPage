import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand" >Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/" exact>Product</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/cart" exact>Cart</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;