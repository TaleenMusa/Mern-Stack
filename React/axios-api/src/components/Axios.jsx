import React, { useState } from 'react';
import axios from 'axios';

function Axios() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => setPokemons(response.data.results))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <button onClick={getPokemons}>
        Fetch Pokemons
      </button>
      <div>
        <ul>
          {pokemons.map((item, idx) => <li key={idx}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Axios;
