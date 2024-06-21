const BASE_URL = 'https://swapi.dev/api/starships';

const index = async (searchTerm) => {
  try {
    const queryString = searchTerm ? `/?search=${searchTerm}` : '';
    const res = await fetch(BASE_URL + queryString);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// Simplified search example:
const search = async (searchTerm) => {
  try {
    const queryString = `/?search=${searchTerm}`;
    const res = await fetch(BASE_URL + queryString);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  index,
  search,
};