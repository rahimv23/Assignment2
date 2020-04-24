import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Name from '../Name/name';

const Sprites = (props) => {

    const [image, setImage] = useState([]);
    const { name } = props;

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/${name}').then((response) => {
          console.log(response.data.results)
    
           
          setTimeout(() => {
            setImage(response.data.sprites.front_default);
          }, 1000)
        });
      }, []);  
      
      return (

        {image}
      )

};

export default Sprites; 