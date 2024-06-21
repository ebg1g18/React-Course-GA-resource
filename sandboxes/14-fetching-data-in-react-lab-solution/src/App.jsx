// Hooks
import { useState, useEffect } from 'react';

// Services
import * as starWarsService from './services/starshipService';

// Components
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await starWarsService.index();
      console.log('Starship data:', data); // Notice the properties of `data`
      setStarships(data.results); // results is an array
    };
    fetchStarships(); // Calls upon the fetch fn when the page loads
  }, []); // Don't forget to include an empty dependency array!

  const searchStarships = async (searchTerm) => {
    const data = await starWarsService.index(searchTerm); // Reusing the index fn
    console.log('Starship data:', data); // Notice the properties of `data`
    setStarships(data.results); // results is an array
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch searchStarships={searchStarships} />
      <StarshipList starships={starships} />
    </main>
  );
};

export default App;