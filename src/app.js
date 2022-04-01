function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city");
  let descritpionElement = document.querySelector("#current-description");
  let windElement = document.querySelector("#wind-speed");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descritpionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "9860ec3dfdc6dad49e4f6a4e8c42cfa9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ericeira&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
