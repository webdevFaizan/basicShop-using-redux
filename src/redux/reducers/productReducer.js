import { ActionTypes } from "../constants/action-type";

const initialState = {
    products: [],
  };

export const productReducer = (state=initialState, {type, payload})=>{
    let products = payload;
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products};
        default : 
            return state;
    }
}

export const selectedProductsReducer = (state={}, {type, payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCTS : 
            return {...state, product : payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS : 
            return {};
        default :
            return state;
    }
}


