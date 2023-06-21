import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
//   const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/"+id)
      .then(res => {
        setProduct(res.data); 
        // setLoaded(true);
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }, []);

//   const deleteProduct =(id) => {
//     axios.delete("http://localhost:8000/api/product/"+id)
//     .then((res) =>{console.log(res);
//       navigate("/")
//     })
//     .catch((err) => console.log(err));
//   }

  return (
    <div>

      <p>Title: {product!=null ? product.title : ""}</p>
      {product ? <p>Price : {product.price}</p> : <p></p>}
      {product ? <p>Descriptions : {product.description}</p> : <p></p>}
      {/* <p><button onClick={()=>deleteProduct(product._id)}>Delete</button></p> */}
    </div>
  );
};

export default Detail;