import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, removeFromDom }) => {
  if (!products) {
    return <div>No products available</div>;
  }

  return (
    <div>
      {products.map((product, i) => (
        <div key={i}>
          <Link to={"/Details/"+product._id}>
            {product.title}, {product.price}, {product.description}
          </Link>
          <button onClick={() => { removeFromDom(product._id) }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
