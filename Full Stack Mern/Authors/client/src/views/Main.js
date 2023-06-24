import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../components/Home';

const Main = () => {
  const [allAuthors, setAllAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => {
        setAllAuthors(res.data.authors);
        setLoaded(true);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteAuthor = (id) => {
    axios.delete("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        console.log(res);
        // Update the state by removing the deleted author
        setAllAuthors(allAuthors.filter(author => author._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Home allAuthors={allAuthors} fun={deleteAuthor} />
    </div>
  );
}

export default Main;