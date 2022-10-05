import { combineReducers } from "redux";
// import producerReducer from './productReducer';
import {selectedProductsReducer, productReducer} from './productReducer'

let reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductsReducer
});

export default reducers;
