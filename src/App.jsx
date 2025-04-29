import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import gsap from 'gsap';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    gsap.fromTo(
      "header",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power4.out" }
    );
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: ' #F1EEE3' }}>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon"/>
        <SearchBar query={query} setQuery={setQuery} selectedType={selectedType} setSelectedType={setSelectedType} types={types} />
      </header>
      <PokemonList query={query} selectedType={selectedType} types={types} setTypes={setTypes} />
    </div>
  );
};

export default App;
