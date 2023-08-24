
import React from 'react';

const Pokecard = ({name, img, type, exp}) => {

    return (

        <div>

            <h2>{name}</h2>
            <img src={img}></img>
            <h3>Type: {type}</h3>
            <h3>EXP: {exp}</h3>

        </div>

    )

}

export default Pokecard;