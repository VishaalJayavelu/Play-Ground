function getWeatherData(name) {
     const apiKey = "bd41e0404fb468b9d179224fcd1de2e6";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`;
     return fetch(url)
     .then(response => response.json())
     .then(data => {
          const weatherData = {
               name: data.name,
               icon: data.weather[0].icon,
               maxtemperature: data.main.temp_max,
               temperature: data.main.temp,
               mintemperature: data.main.temp_min,
               condition: data.weather[0].main,
               description: data.weather[0].description,
          };
         return weatherData;
     });
   }
function updateUI(weatherData) {
     const name = document.querySelector("#name");
     const image = document.querySelector("#image");
     const temperature = document.querySelector("#temp");
     const minmaxtemperature = document.querySelector("#min-max-temp");
     const condition = document.querySelector("#climate");
     const description = document.querySelector("#description");

     name.textContent = weatherData.name;
     image.setAttribute("src",`http://openweathermap.org/img/w/${weatherData.icon}.png`)
     temperature.textContent = Math.floor(`${weatherData.temperature}`)+'°C';
     minmaxtemperature.textContent = Math.floor(`${weatherData.maxtemperature}`)+'°C / '+ Math.floor(`${weatherData.mintemperature}`) +'°C';
     condition.textContent = weatherData.condition;
     description.textContent = weatherData.description;

     const content = document.querySelector("#content");
     content.setAttribute("style", "background-color: var(--dim);")

}

const searchBtn = document.querySelector("#search-city-btn");
const searchBar = document.querySelector("#search-city");

searchBtn.addEventListener("click", () => {
     const name = searchBar.value;
     getWeatherData(name)
     .then(weatherData => {
          updateUI(weatherData);
     })
     .catch(error => {
          console.log(error);
     });
});
