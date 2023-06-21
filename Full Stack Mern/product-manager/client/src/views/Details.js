import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        const { title, price, description } = res.data;
        setProduct(res.data);
        setTitle(title);
        setPrice(price);
        setDescription(description);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = () => {
    const updatedProduct = {
      title: title,
      price: price,
      description: description
    };

    axios.put(`http://localhost:8000/api/product/${id}`, updatedProduct)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <label>Title:</label>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label>Price:</label>
      <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
      <label>Description:</label>
      <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Detail;
