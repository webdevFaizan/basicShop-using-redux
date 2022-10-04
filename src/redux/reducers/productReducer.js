import { ActionTypes } from "../constants/action-type";

const initialState ={
    
}

const productReducer = (state=initialState, {type, payload})=>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,payload};
        default : 
            return state;
    }
}


export default productReducer;
