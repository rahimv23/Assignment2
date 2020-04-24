import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import DisplayGrid from './Components/DisplayGrid/displayGrid';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
      console.log(response.data)

       
      setTimeout(() => {
        setPokemon(response.data.results);
      }, 1000)
    });
  }, []);

  console.log(pokemon);
  return (
    <div className="App">
      <h1>Pokemon App</h1>
      
      {pokemon.length === 0 && (
        <p>Loading...</p>
      )}
      

      <DisplayGrid />
      
      
    </div>
  );
}

export default App;
