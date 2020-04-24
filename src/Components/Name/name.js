import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Name = (props) => {
    const [pokemon, setPokemon] = useState([]);
  
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
        console.log(response.data)
  
         
        setTimeout(() => {
          setPokemon(response.data.results);
        }, 1000)
      });
    }, []);


};


export default Name;