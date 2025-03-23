import humidityImage from "../assets/images/humidity.png";
import windSpeedImage from "../assets/images/windspeed.png";

export function errorText(data) {
  const allContainer = document.querySelectorAll(".content");
  allContainer.forEach((container) => container.remove());

  const container = document.querySelector(".container");

  const content = document.createElement("div");
  content.classList.add("content");

  const errorText = document.createElement("h3");
  errorText.textContent = `Could not find the location. ${data} Bad Request`;

  content.appendChild(errorText);

  container.appendChild(content);
}

export function loader() {
  const allContainer = document.querySelectorAll(".content");
  allContainer.forEach((container) => container.remove());

  const container = document.querySelector(".container");

  const content = document.createElement("div");
  content.classList.add("content");

  const loader = document.createElement("h1");
  loader.textContent = "Loading...";

  content.appendChild(loader);

  container.appendChild(content);
}

export function renderWeatherData(data) {
  const allContainer = document.querySelectorAll(".content");
  allContainer.forEach((container) => container.remove());

  const container = document.querySelector(".container");
  const content = document.createElement("div");
  content.classList.add("content");

  renderTemp(content, data);

  renderLocation(content, data);

  const humidityWindWrapper = document.createElement("div");
  humidityWindWrapper.classList.add("humidity-wind-wrapper");

  renderHumidity(humidityWindWrapper, data);

  renderWindSpeed(humidityWindWrapper, data);
  content.appendChild(humidityWindWrapper);
  container.appendChild(content);
}

function renderTemp(content, data) {
  const weatherType = document.querySelector("#weatherType");
  const temperature = document.createElement("h1");
  temperature.textContent = `${data.currentConditions.temp} ${weatherType.value === "metric" ? "°C" : "°F"}`;
  temperature.id = "temp";
  content.appendChild(temperature);
}

function renderLocation(content, data) {
  const location = document.createElement("p");
  location.textContent = data.resolvedAddress;

  location.id = "location";
  content.appendChild(location);
}

function renderHumidity(humidityWindWrapper, data) {
  const humidityContainer = document.createElement("div");
  humidityContainer.classList.add("humidity-container");

  const humidityIcon = document.createElement("img");
  humidityIcon.src = humidityImage;
  humidityIcon.classList.add("humidity-icon");
  humidityContainer.appendChild(humidityIcon);

  const humidityDetails = document.createElement("div");
  humidityDetails.classList.add("humidity-details");

  const humidity = document.createElement("p");
  humidity.textContent = `${data.currentConditions.humidity}%`;

  humidity.id = "humidity";
  humidityDetails.appendChild(humidity);

  const humidityTag = document.createElement("p");
  humidityTag.textContent = "Humidity";
  humidityDetails.appendChild(humidityTag);

  humidityContainer.appendChild(humidityDetails);
  humidityWindWrapper.appendChild(humidityContainer);
}

function renderWindSpeed(humidityWindWrapper, data) {
  const weatherType = document.querySelector("#weatherType");

  const windSpeedContainer = document.createElement("div");
  windSpeedContainer.classList.add("wind-speed-container");

  const windSpeedIcon = document.createElement("img");
  windSpeedIcon.src = windSpeedImage;
  windSpeedIcon.classList.add("wind-speed-icon");
  windSpeedContainer.appendChild(windSpeedIcon);

  const windSpeedDetails = document.createElement("div");
  windSpeedDetails.classList.add("wind-speed-details");

  const windSpeed = document.createElement("p");
  windSpeed.textContent = `${data.currentConditions.windspeed} ${weatherType.value === "metric" ? "km/h" : "m/h"}`;

  windSpeed.id = "humidity";
  windSpeedDetails.appendChild(windSpeed);

  const windSpeedTag = document.createElement("p");
  windSpeedTag.textContent = "Wind Speed";
  windSpeedDetails.appendChild(windSpeedTag);

  windSpeedContainer.appendChild(windSpeedDetails);
  humidityWindWrapper.appendChild(windSpeedContainer);
}
