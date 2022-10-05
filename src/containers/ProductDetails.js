import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetails = () =>{
    const {productId} = useParams();    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const p = useSelector((state)=>state.product.product);
    
    console.log(p);

    const fetchData = async ()=>{
        let url = `https://fakestoreapi.com/products/${productId}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        dispatch(selectedProduct(jsonData));
        setTimeout(()=>{
            setLoading(false);
        },659);
    }

    useEffect(()=>{
        setLoading(true);
        fetchData();
        return()=>{
            dispatch(removeSelectedProduct());
        }
        // eslint-disable-next-line   
    },[productId])

    // if(p)
    // {
    //     const {id, title, image, category, price} = p;
    // }
    return (
        <>
            {loading && <div>...Loading</div>}
            {!loading &&            
                <div className="ProductDetails container">
                    <h1>Product ProductDetails</h1>
                    <div className="four wide column center" key={p.id}>                
                        <div className="ui link cards">
                        <div className="card" style={{minHeight : 500, display: 'flex'}}>
                            <div className="image" style={{backgroundColor: 'white'}} >
                            <img src={p.image} style={{height : 299, objectFit: 'contain'}} alt={p.title} />
                            </div>
                            <div className="content">
                            <div className="header">{p.title}</div>
                            <div className="meta price">$ {p.price}</div>
                            <div className="meta">{p.category}</div>
                            </div>
                        </div>
                        </div>                
                    </div>
                </div>
            }
        </>
    )
}
export default ProductDetails;