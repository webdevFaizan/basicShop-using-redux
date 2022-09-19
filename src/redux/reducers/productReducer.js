import { ActionTypes } from "../constants/action-type";

const initialState ={
    products : [{
        id : 1,
        title : "Faizan",
        category : "programmer"
    }]
}

const productReducer = (state=initialState, {type, products})=>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products};        
        default : 
            return state;
    }
}


export default productReducer;
