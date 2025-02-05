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

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }
      return response.json();
    })
    .then((data) => {
      showWeather(data);
    })
    .catch((error) => {
      weatherInfo.innerHTML = `<p>${error.message}</p>`;
    });
}

function showWeather(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  const weatherHtml = `
        <h2>${name} ☁️</h2>
        <div class="temperature">${temp}°C</div>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${speed} m/s</p>
    `;
  weatherInfo.innerHTML = weatherHtml;
}
