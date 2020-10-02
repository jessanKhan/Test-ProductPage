import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts, productPageChange, productSearch, addedProductToCard } from '../redux/actions/productAction'
import Pagination from './pagination';
import '../components/product.css'


class Product extends Component {


    async componentDidMount() {
        const { page, take } = this.props.products;
        await this.props.dispatch(fetchAllProducts(page, take));
    }

    onPageChange = async (val) => {
        let { take, page, query } = this.props.products;
        if (val === '-') {
            page -= 1
        } else {
            page += 1
        }
        if (!query) {
            this.props.dispatch(productPageChange(page));
            this.props.dispatch(fetchAllProducts(page, take));
        } else {
            this.props.dispatch(productPageChange(page));
            this.props.dispatch(productSearch(query, page, take));

        }
    }

    handleProductSearch = async (e) => {
        const { take, page, } = this.props.products
        await this.props.dispatch(productSearch(e.target.value, page, take));
    }


    handleAddToCart = (item) => {
        this.props.dispatch(addedProductToCard(item))
    }


    render() {
        const { data, take, page, total, cart } = this.props.products;

        console.log('cart', cart);
        return (
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Search' onChange={this.handleProductSearch} />
                </form>
                <table className="table table-responsive-sm table-responsive-md table-responsive-lg">
                    <thead  >
                        <tr>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Image</th> */}
                            <th scope="col">Shop stock</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Product code</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                {/* <td> <img src={item.featuredImage} alt='' /> </td> */}
                                <td>{item.shopStock}</td>
                                <td>{item.stock}</td>
                                <td>{item.productCode}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td onClick={() => this.handleAddToCart(item)} className="cursorevent"><i class="fa fa-shopping-cart"></i></td>
                            </tr>
                        )}

                    </tbody>
                </table>
                <Pagination
                    itemsCount={total}
                    pageSize={take}
                    currentPage={page}
                    onPageChange={this.onPageChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products

    };
}

export default connect(mapStateToProps)(Product);