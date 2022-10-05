import { ActionTypes } from "../constants/action-type";

const initialState = {
    products: [],
  };

const productReducer = (state=initialState, {type, payload})=>{
    console.log(payload);
    let products = payload;
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products};
        default : 
            return state;
    }
}

export default productReducer;