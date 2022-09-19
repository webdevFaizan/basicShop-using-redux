import { ActionTypes } from "../constants/action-type"


export const setProducts =(products) =>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        products : products,
    };
}

export const selectedProducts =(product) =>{
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : product,
    };
}