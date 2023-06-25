import React, { useState,useEffect} from 'react';
import CreateForm from '../components/CreateForm'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const New = () => {
    const navigate = useNavigate();
    const [allAuthors, setAllAuthors] = useState([]);
    const handleAddAuthor = (name) => {
        
        axios.post('http://localhost:8000/api/authors', {name}

        )
        .then(res => {
            setAllAuthors([...allAuthors,res.data.author]);
console.log(res.data.author)
navigate("/");
          })
            .catch(err => console.log(err));
        
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
          .then(res => {
            setAllAuthors(res.data.authors);
          })
          .catch(err => console.log(err));
      }, []);
    
    return (
        <div>
            <CreateForm initialName="" myFun={handleAddAuthor} />
   {/* Render the list of authors */}
   {allAuthors && allAuthors.map(author => (
        <div key={author._id}>
          <p>{author.name}</p>
        </div>
         ))}
        </div>
    )
}

export default New
