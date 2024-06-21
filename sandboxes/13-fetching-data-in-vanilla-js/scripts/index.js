
/*
- When the user submit the form, I want to take the value of the input city.
- Then, I want to go to a public API, fetch the realtime weather data from the city
- Render in the page
*/

// Element


// https://api.openweathermap.org/data/2.5/weather?q=caracas&APPID=870b1b10b58578f725b70b13aff6c357

// *************************************
// * SERVICE 

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '870b1b10b58578f725b70b13aff6c357'


const fetchWeatherByCity = async (city) => {

  try {
    const response = await fetch(`${BASE_URL}?q=${city}&APPID=${API_KEY}&units=metric`, {
      method: 'GET'
    });
    const { main: {
      temp
    }, weather } = await response.json()
    const { description } = weather[0];
    return { temp, description };
  } catch (error) {
    throw Error('Something went off when calling Open Weathewr API.', error.message)
  }

}

// *************************************
const form = document.querySelector('form');


// Event
form.addEventListener('submit', handleSubmit)

// Execution

async function handleSubmit(event){
  event.preventDefault()
  const formData = new FormData(form)
  const city = formData.get('city')
  const { temp, description } = await fetchWeatherByCity(city);
  renderWeather({ temp, description, city })
}

function renderWeather({ temp, description, city }) {
  const cityElement = document.querySelector('#city');
  const tempElement = document.querySelector('#temp');
  const descriptionElement = document.querySelector('#description');


  cityElement.innerText = city;
  tempElement.innerText = temp;
  descriptionElement.innerText = description;
}


