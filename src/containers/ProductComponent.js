import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);
    const renderList = products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card" style={{minHeight : 500, display: 'flex'}}>
                <div className="image" style={{backgroundColor: 'white'}} >
                  <img src={image} style={{height : 299, objectFit: 'contain'}} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return <>{renderList}</>;
  };
export default ProductComponent;