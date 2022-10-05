import React, { useEffect,useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () =>{
    const products = useSelector(state => state.allProducts.products);       //This is the hook, useSelector that helps us in getting the state that is currently stored in the store. This is the main hook if we do not want to pass on the state of the current component to the next component using props, this method is the one that comes to handy, We need the state of the products in the ProductComponent as well but we do not need to send it as props, we can call this useSelector hook in that method as well and it will help in accessing the props.
    // console.log(products);

    const dispatch = useDispatch();     //This dispatch hook is used to dispatch the action to the redux action creator. This method has to be called inside a component function and not inside any other function, for example if we call this method inside the fetchData method it will throw an error.    
    
    //The following method of using the fetchData function is also good since we will be able to add those, thought this will not create a drastic difference in this code.    
    // const fetchData = useCallback(async ()=>{
    //         const response = await fetch('https://fakestoreapi.com/products');
    //         const jsonData = await response.json();
    //         // console.log(jsonData);
    //         dispatch(setProducts(jsonData));
    //         console.log(products);
    //     },[""]);
        
    const fetchData = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        // console.log(jsonData);
        dispatch(setProducts(jsonData));    //In order for us to add this data that we received into the store, we need to dispatch an action, this action will consist of action type and payload that will ultimately update the redux store.
        // console.log(products);
        // IMPORTANT and DOUBT : There is something interesting that I noticed here, if we are consoling the value of products here, this is not showing the final result, but when the same useSelector hook is used in the productComponent.js file this is going us a correct result.
        // The main doubt here is that, since the dispatch method runs only after the await call, which simply means the answer should be 
    };

    useEffect(()=>{
        fetchData();
        //eslint-disable-next-line        
    },[]);

    return (
        <>
            <div className="ui grid container">
                {/* {"rendering"}
                {products[2].title} */}
                {/* {`${typeof (products)}`} */}
                {/* {products && products.map((elem)=>{
                    return <ProductComponent key={elem.id} title={elem.title}/>
                })} */}
                <ProductComponent/>
            </div>
        </>
    )
}

export default ProductListing;