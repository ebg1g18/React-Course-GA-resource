// Hooks
import { useState } from 'react';

const StarshipSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    props.searchStarships(searchTerm); // Call upon search fn
    setSearchTerm(''); // Reset input
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='starshipSearch'>
          Search Term:
        </label>
        <input
          type='text'
          id='searchTerm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;