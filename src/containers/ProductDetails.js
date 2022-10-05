import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetails = () =>{
    const {productId} = useParams();    
    const dispatch = useDispatch();
     
    const [loading, setLoading] = useState(true);
    const p = useSelector((state)=>state.product.product);  //IMPORTANT & DOUBT : There is a problem with this variable. In the initial stages, the value of p is undefined, but in the dipesh malvia this was not undefined, but anyways I had to write some different logic just to make sure, we are not accessing the variable 'p' before it is being defined. If we access the variable in the jsx while it is undefined. We will get an error for sure. In the dipesh malvia video this was the main issue, p was never getting undefined value at any stage, but still I could not find out the reason why I am getting undefined. Most problably the reason should be that the state is being accessed before the state is getting updated, research about this problem. And because of this I am not able to destructure the variable p. But in the dipesh malvia video he was able to destrcutrue it right from the beggining.
    
    // console.log(p);
    console.log("heelo");

    const fetchData = async ()=>{
        let url = `https://fakestoreapi.com/products/${productId}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        dispatch(selectedProduct(jsonData));

        // IMPORTANT & DOUBT : I have deliberately added the setLoading method inside the setTimeout() method this is to make sure that the state of product is loaded before the varialbe 'p' could be accessed in the jsx, if I did not do this, there is a chance that we will have an error. This is definately not the solution to our problem but the main purpose of this code was to teach us react redux. but at this point I could only understand it partially, this state management and being able to access it at correct time is also part of react redux learning, but I have to read it later on as well.
        setTimeout(()=>{
            setLoading(false);      //Using setTimeout() method here will create a trust issue as said by Akshay Saini.
        },259);
    }

    useEffect(()=>{
        setLoading(true);
        fetchData();        
        // eslint-disable-next-line   
    },[productId])

    useEffect(()=>{
        setLoading(true);
        return()=>{
            dispatch(removeSelectedProduct());      //IMPORTANT : This is the clean callback, we want the previous object to be destroyed before mounting the new object, so the use effect method will behave like a componentwillunmount method. But as per the react docs, we can have a different react hook for each and every different react life cycle method. Now I have componentDidUpdate() react lifecycle method separated and the code still works fine.
        }
        // eslint-disable-next-line   
    },[productId])

    // if(p)
    // {
    //     const {id, title, image, category, price} = p;       //DOUBT : Could not implement desctructuring, because the variable p is not always defined, thus creating a problem.
    // }    
    return (
        <>
            {loading && <div>...Loading</div>}
            {!loading &&            
                <div className="ui placeholder segment container">
                <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider">AND</div>
                  <div className="middle aligned row">
                    <div className="column lp">
                      <img className="ui fluid image" src={p.image} />
                    </div>
                    <div className="column rp">
                      <h1>{p.title}</h1>
                      <h2>
                        <a className="ui teal tag label">${p.price}</a>
                      </h2>
                      <h3 className="ui brown block header">{p.category}</h3>
                      <p>{p.description}</p>
                      <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                          <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
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