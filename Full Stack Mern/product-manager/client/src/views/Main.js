import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import ProductList from '../components/PersonList'

export default () => {
    const[allProducts,setAllProducts]=useState([])
    const[loaded,setLoaded]=useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
            .then(res=>{
                setAllProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    return (
        <div>
            <ProductForm />
            {loaded &&<ProductList all={allProducts}/>}
            
        </div>
    )
}
