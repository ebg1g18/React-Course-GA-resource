// Components
import StarshipCard from './StarshipCard';

const StarshipList = (props) => {
  const { starships } = props;
  return (
    <section>
      <h2>Starships</h2>
      <p>Number of results: {starships.length}</p>
      <ul>
        {starships.map((starship) => (
          <StarshipCard
            key={starship.name}
            starship={starship}
          />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;