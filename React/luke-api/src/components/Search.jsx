import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [type, setType] = useState('people');
  const [id, setID] = useState('1');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/${type}/${id}`);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleIDChange = (event) => {
    setID(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <select value={type} onChange={handleTypeChange}>
          <option value="people">People</option>
          <option value="planets">Planet</option>
        </select>
        <label htmlFor="id">ID</label>
        <input type="number" id="id" value={id} onChange={handleIDChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
