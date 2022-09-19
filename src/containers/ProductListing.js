import React from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';

const ProductListing = (props) =>{
    const products = useSelector(state => state);       //This is the hook, useSelector that helps us in getting the state that is currently stored in the store. This is the main hook if we do not want to pass on the state of the current component to the next component using props, this method is the one that comes to handy, We need the state of the products in the ProductComponent as well but we do not need to send it as props, we can call this useSelector hook in that method as well and it will help in accessing the props.
    console.log(products);
    return (
        <>
            <div className="ui grid container">
                <ProductComponent/>
            </div>
        </>
    )
}

export default ProductListing;