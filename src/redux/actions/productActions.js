import { ActionTypes } from "../constants/action-type"

//The actions functions always return an object and this will define what action should be taken and also what kind of payload is to be sent.
export const setProducts =(product) =>{
    // console.log(product);
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : product,
    };
}

export const selectedProduct =(product) =>{
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : product,
    };
}