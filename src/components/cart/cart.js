import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeProductQuantity, removeProductFromCard } from '../../redux/actions/productAction'
import './cart.css'




class cart extends Component {

    handleQuantity = (type, product) => {
        if (type === '+') {
            product.quantity += 1
            this.props.dispatch(changeProductQuantity(product))
        } else {
            product.quantity -= 1
            this.props.dispatch(changeProductQuantity(product))
        }
    }

    handleCartRemove = (product) => {
        this.props.dispatch(removeProductFromCard(product))
    }
    render() {

        const { cart } = this.props.products;

        return (
            <div>
                <div className="container">
                    <div className="card">
                        <table className="table table-hover shopping-cart-wrap">
                            <thead className="text-muted">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col" width="120">Quantity</th>
                                    <th scope="col" width="120">Price</th>
                                    <th scope="col" width="200" className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {cart.map((product, i) =>
                                    <tr key={i}>
                                        <td>{product.name}</td>
                                        <td className="text-center">
                                            <span className="form-controls">
                                                <span className="plus" onClick={() => this.handleQuantity('+', product)}>+</span>
                                                <span className="valuesinc">{product.quantity || 1}</span>
                                                <span className="minus" onClick={() => this.handleQuantity('-', product)}>-</span>
                                            </span>
                                        </td>
                                        <td>
                                            <div className="price-wrap">
                                                <var className="price">{product.price}</var>
                                                <small className="text-muted">total price {product.quantity * Number(product.price)}</small>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div class="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></div>
                                            <div className="btn btn-outline-danger" onClick={() => this.handleCartRemove(product)}> × Remove</div>
                                        </td>
                                    </tr>

                                )}



                                {/* <tr>
                                    <td>
                                        <figure className="media">
                                            <div className="img-wrap"><img className="img-thumbnail img-sm" src="" alt="image not found" /></div>
                                            <figcaption className="media-body">
                                                <h6 className="title text-truncate">Product name goes here </h6>
                                                <dl className="param param-inline small">
                                                    <dt>Size: </dt>
                                                    <dd>XXL</dd>
                                                </dl>
                                                <dl className="param param-inline small">
                                                    <dt>Color: </dt>
                                                    <dd>Orange color</dd>
                                                </dl>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td className="text-center">
                                        <span className="form-controls">
                                            <span className="plus">+</span>
                                            <span className="valuesinc">1</span>
                                            <span className="minus">-</span>
                                        </span>
                                    </td>
                                    <td>
                                        <div className="price-wrap">
                                            <var className="price">USD 35</var>
                                            <small className="text-muted">(USD10 each)</small>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <a title="" href="" className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></a>
                                        <a href="" className="btn btn-outline-danger btn-round"> × Remove</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <figure className="media">
                                            <div className="img-wrap"><img className="img-thumbnail img-sm" src="" alt="image not found" /></div>
                                            <figcaption className="media-body">
                                                <h6 className="title text-truncate">Product name goes here </h6>
                                                <dl className="param param-inline small">
                                                    <dt>Size: </dt>
                                                    <dd>XXL</dd>
                                                </dl>
                                                <dl className="param param-inline small">
                                                    <dt>Color: </dt>
                                                    <dd>Orange color</dd>
                                                </dl>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td className="text-center">
                                        <span className="form-controls">
                                            <span className="plus">+</span>
                                            <span className="valuesinc">1</span>
                                            <span className="minus">-</span>
                                        </span>
                                    </td>
                                    <td>
                                        <div className="price-wrap">
                                            <var className="price">USD 45</var>
                                            <small className="text-muted">(USD15 each)</small>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <a title="" href="" class="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart"></i></a>
                                        <a href="" className="btn btn-outline-danger btn-round"> × Remove</a>
                                    </td>
                                </tr>
                         
                          */}

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(cart);