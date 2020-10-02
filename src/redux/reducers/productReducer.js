import {
    FETCH_ERROR, FETCH_START, FETCH_SUCCESS, PRODUCT_ADDED_CART, PRODUCT_PAGE_CHANGE,
    PRODUCT_QUANTITY_CHANGE,
    PRODUCT_QUERY_ERROR, PRODUCT_QUERY_START, PRODUCT_QUERY_SUCCESS, PRODUCT_REMOVE_CART,
} from "../constrains";

const initialState = {
    isLoading: false,
    errors: null,
    data: [],
    total: 0,
    page: 1,
    take: 10,
    query: '',
    cart: []
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_START:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                total: action.payload.total
            }

        case FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }

        case PRODUCT_PAGE_CHANGE:
            return {
                ...state,
                page: action.payload
            }


        case PRODUCT_QUERY_START:
            return {
                ...state,
                query: action.payload
            }

        case PRODUCT_QUERY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                total: action.payload.total
            }

        case PRODUCT_QUERY_ERROR:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }

        case PRODUCT_ADDED_CART:
            return {
                ...state,
                cart: state.cart.concat({ ...action.payload, quantity: 1 })
            }

        case PRODUCT_REMOVE_CART:
            const filter = state.cart.filter(product => product.uuid !== action.payload.uuid)
            return {
                ...state,
                cart: filter
            }

        case PRODUCT_QUANTITY_CHANGE:
            const idx = state.cart.findIndex(product => product.uuid === action.payload.uuid);
            state.cart[idx] = { ...action.payload }
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default productReducer;