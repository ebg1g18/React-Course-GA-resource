/*
- When the user submit the form, I want to take the value of the input city.
- Then, I want to go to a public API, fetch the realtime weather data from the city
- Render in the page
*/
import { Route, Routes } from 'react-router-dom';

import CountriesPage from './pages/Countries';
import CountryPage from './pages/Country';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import WeatherPage from './pages/Weather';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/countries" element={<CountriesPage />} />
      <Route path="/country/:isoCode" element={<CountryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
