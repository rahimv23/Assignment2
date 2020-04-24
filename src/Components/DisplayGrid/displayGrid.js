import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './displayGrid.css';

import Sprites from '../Sprite/sprite';

const DisplayGrid = (props) => {
    const { data } = props;

    const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
      console.log(response.data)

       
      setTimeout(() => {
        setPokemon(response.data.results);
      }, 1000)
    });
  }, []);

    return (

        <div className="container">
        <div className="row">
            {pokemon.map((pokemon) => {
             return (
                
                <div class="col-sm-3 mb-4">
                <div className="card text-white bg-warning">
                    <div className="card-body">
                    <Sprites name={pokemon.name} />
                        <h5 className="card-title">{pokemon.name}</h5>
                        <button type="button" class="btn btn-danger">Details</button>
                     </div>
                </div>
                </div>
                
    
            );
        },
        )
            };
        </div>    
        </div>
    )

    



};

export default DisplayGrid;