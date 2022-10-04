import React from 'react';
import {useSelector} from 'react-redux';

const ProductComponent = ({title}) =>{
    // const products = useSelector(state => state.allProducts);
    // // console.log(products);
    // const {title} = products[1];
    return (
        <>
            <div className="four cloumn wide">
                <div className="ui link cards">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">
                            {title}
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}
export default ProductComponent;