import React from 'react';
import '../styles/SearchBar.scss'

const SearchBar = ({ query, setQuery, selectedType, setSelectedType, types }) => {
  return (
    <div className='searchbar'>
      <input 
        type="text" 
        placeholder="Search by name..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <select 
        value={selectedType} 
        onChange={(e) => setSelectedType(e.target.value)} 
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
