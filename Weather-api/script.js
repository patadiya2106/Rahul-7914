const apiKey = "f9dc0e945f1c83764ae62c8bab49c4e1"; // Rahul's API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim(); // Get the city name from the input field
  if (city) {
    fetchWeather(city); // Call the function to fetch weather data
  } else {
    alert("Please enter a city name."); // Show an alert if the input is empty
  }
});

function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API URL

  fetch(apiUrl) // Fetch data from the API
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found. Please try again."); // Throw an error if the city is not found
      }
      return response.json(); // Convert the response to JSON
    })
    .then((data) => {
      showWeather(data); // Call the function to display weather data
    })
    .catch((error) => {
      weatherInfo.innerHTML = `<p>${error.message}</p>`; // Display the error message
    });
}

function showWeather(data) {
  const { name } = data; // City name
  const { temp, humidity } = data.main; // Temperature and humidity
  const { speed } = data.wind; // Wind speed

  const weatherHtml = `
        <h2>${name}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${speed} m/s</p>
    `;
  weatherInfo.innerHTML = weatherHtml; // Insert the weather details into the container
}
