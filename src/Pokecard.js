
import React from 'react';
import './Pokecard.css';


const Pokecard = ({name, img, type, exp}) => {

    return (

        <div className='Pokecard'>

            <h2 className='Pokecard-title'>{name}</h2>
            <img className='Pokecard-img' src={img} alt={`Image of a ${name}`}></img>
            <h3 className='Pokecard-data'>Type: {type}</h3>
            <h3 className='Pokecard-data'>EXP: {exp}</h3>

        </div>

    )

}

export default Pokecard;