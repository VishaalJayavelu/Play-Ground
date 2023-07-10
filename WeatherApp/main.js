function getWeatherData(location) {
     const apiKey = "bd41e0404fb468b9d179224fcd1de2e6";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
     return fetch(url)
       .then(response => response.json())
       .then(data => {
         const weatherData = {
           temperature: data.main.temp,
           condition: data.weather[0].main,
           location: data.name,
         };
         return weatherData;
       });
   }
function updateUI(weatherData) {
     const temperature = document.querySelector("#temp");
     const condition = document.querySelector("#climate");
     const location = document.querySelector("#name");

     temperature.textContent = `${weatherData.temperature}°C`;
     condition.textContent = weatherData.condition;
     location.textContent = weatherData.location;
}

const searchBtn = document.querySelector("#search-city-btn");
const searchBar = document.querySelector("#search-city");

searchBtn.addEventListener("click", () => {
     const location = searchBar.value;
     getWeatherData(location)
     .then(weatherData => {
     updateUI(weatherData);
     })
     .catch(error => {
     console.log(error);
     });
});