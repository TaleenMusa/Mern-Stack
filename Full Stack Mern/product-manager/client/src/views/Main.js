import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import ProductList from '../components/ProductList';

export default () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const removeFromDom = (productId) => {
    setAllProducts(allProducts.filter(product => product._id !== productId));
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/allProducts')
      .then(res => {
        setAllProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ProductForm />
      {loaded && <ProductList products={allProducts} removeFromDom={removeFromDom} />}
    </div>
  );
}
