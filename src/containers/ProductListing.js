import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = (props) =>{
    const products = useSelector(state => state);       //This is the hook, useSelector that helps us in getting the state that is currently stored in the store. This is the main hook if we do not want to pass on the state of the current component to the next component using props, this method is the one that comes to handy, We need the state of the products in the ProductComponent as well but we do not need to send it as props, we can call this useSelector hook in that method as well and it will help in accessing the props.
    console.log(products);

    const dispatch = useDispatch();

    const fetchData = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        // console.log(jsonData);
        dispatch(setProducts(jsonData));
    }

    useEffect(()=>{
        fetchData();
        //eslint-disable-next-line
    },[]);

    return (
        <>
            <div className="ui grid container">
                {/* <ProductComponent/> */}
            </div>
        </>
    )
}

export default ProductListing;