import { combineReducers } from "redux";
import producerReducer from './productReducer';

const reducers = combineReducers({
    allProducts : producerReducer,
});

export default reducers;
