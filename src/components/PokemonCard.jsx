import React from 'react';
import '../styles/PokemonCard.scss'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <img src={pokemon.sprite} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <div className='card-info'>
          <p>ID: {pokemon.id}</p>
          <p>Type(s): {pokemon.types.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
