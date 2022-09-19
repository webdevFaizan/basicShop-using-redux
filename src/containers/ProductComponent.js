import React from 'react';
import {useSelector} from 'react-redux';

const ProductComponent = () =>{
    const products = useSelector(state => state);
    const {id, title} = products;
    return (
        <>
            <div className="four cloumn wide">
                <div className="ui link cards">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">

                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}
export default ProductComponent;