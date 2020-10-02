import { getAllProducts } from "../../services/productService";
import {
    FETCH_ERROR, FETCH_START, FETCH_SUCCESS, PRODUCT_PAGE_CHANGE, PRODUCT_QUERY_START,
    PRODUCT_QUERY_SUCCESS, PRODUCT_QUERY_ERROR, PRODUCT_ADDED_CART, PRODUCT_REMOVE_CART,
    PRODUCT_QUANTITY_CHANGE
} from "../constrains";




function fetchAllProducts(page, take) {
    return async (dispatch) => {
        dispatch({ type: FETCH_START });

        try {
            const { data } = await getAllProducts(`/products/?page=${page}&take=${take}`);
            return dispatch({
                type: FETCH_SUCCESS,
                payload: data
            })
        } catch (ex) {
            return dispatch({
                type: FETCH_ERROR,
                payload: ex.response.data
            })
        }
    }
}

function productPageChange(page) {
    return dispatch => {
        dispatch({ type: PRODUCT_PAGE_CHANGE, payload: page })
    }
}

function productSearch(query, page, take) {
    return async (dispatch) => {
        dispatch({ type: PRODUCT_QUERY_START, payload: query })

        try {
            const { data } = await getAllProducts(`/products/filter?searchTerm=${query}&page=${page}&take=${take}`);

            return dispatch({
                type: PRODUCT_QUERY_SUCCESS,
                payload: data
            })
        } catch (ex) {
            return dispatch({
                type: PRODUCT_QUERY_ERROR,
                payload: ex.response
            })
        }
    }
}

function addedProductToCard(product) {
    return (dispatch) => {
        dispatch({ type: PRODUCT_ADDED_CART, payload: product })
    }
}

function removeProductFromCard(product) {
    return (dispatch) => {
        dispatch({ type: PRODUCT_REMOVE_CART, payload: product })
    }
}

function changeProductQuantity(product) {
    return dispatch => {
        dispatch({ type: PRODUCT_QUANTITY_CHANGE, payload: product })
    }
}
export { fetchAllProducts, productPageChange, productSearch, addedProductToCard, removeProductFromCard, changeProductQuantity }