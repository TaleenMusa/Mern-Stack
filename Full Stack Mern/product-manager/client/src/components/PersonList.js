import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    return (
        <div>
            {props.all.map( (product, i) =>
                <Link to={"/Details/"+product._id} key={i}>{product.title}, {product.price}, {product.description}</Link>
            )}
        </div>
    )
}
    
export default ProductList;

