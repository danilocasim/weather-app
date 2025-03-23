import { getWeatherData } from "./fetch-data";
import { toggle } from "./toggle";
import { renderWeatherData, errorText, loader } from "./dom";

export class Listeners {
  static #btnToggleWeatherType = document.querySelector("#weatherType");
  static #btnSubmitLocation = document.querySelector("#submitLocation");

  static #submitLocation() {
    this.#btnSubmitLocation.addEventListener("click", async () => {
      const location = document.querySelector("#searchLocation");

      const weatherData = await getWeatherData(
        location.value,
        this.#btnToggleWeatherType.value,
      );

      loader();

      if (weatherData === 400) {
        errorText(weatherData);
        return;
      }

      renderWeatherData(weatherData);
    });
  }

  static #toggleWeatherType() {
    this.#btnToggleWeatherType.addEventListener("click", async () => {
      const location = document.querySelector("#searchLocation");

      toggle();
      const weatherData = await getWeatherData(
        location.value,
        this.#btnToggleWeatherType.value,
      );

      loader();

      if (weatherData === 400) {
        errorText(weatherData);
        return;
      }

      renderWeatherData(weatherData);
    });
  }

  static runAll() {
    this.#submitLocation();
    this.#toggleWeatherType();
  }
}
