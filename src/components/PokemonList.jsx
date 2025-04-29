import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import '../styles/PokemonList.scss'

const PokemonList = ({ query, selectedType, setTypes }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const { data: details } = await axios.get(pokemon.url);
            return {
              id: details.id,
              name: pokemon.name,
              sprite: details.sprites.front_default,
              types: details.types.map((type) => type.type.name),
            };
          })
        );
        setPokemons(pokemonData);
        setFilteredPokemons(pokemonData);
        setTypes([...new Set(pokemonData.flatMap((pokemon) => pokemon.types))]);
      } catch {
        setError('Failed to load Pokémon data');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, [setTypes]);

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase()) &&
        (selectedType ? pokemon.types.includes(selectedType) : true)
      )
    );
  }, [query, selectedType, pokemons]);

  if (loading) return <div className='pokemon-loading'>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className='pokemon-list'>
        {filteredPokemons.length ? (
          filteredPokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
        ) : (
          <p className='pokemon-not-found'>No <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon" /> found</p>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
