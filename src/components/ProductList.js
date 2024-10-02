import React from 'react';
import '../style/ProductList.scss';
//-------------------------------------------------
function ProductList({ products , language }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-cart">
          <img className='img-pr' src={product.image} alt={product.name} />
          <div className={`product-info ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className='right-side'>
              <h2 className='head-name'>{product.name}</h2>
              <p className='desc-name'>{product.description}</p>
            </div>
            <div className='left-side'>
              <span className='price'>{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
//-------------------------------------------------
export default ProductList;