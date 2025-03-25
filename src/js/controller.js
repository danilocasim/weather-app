import { getWeatherData } from "./fetch-data";
import { toggle } from "./toggle";
import { renderWeatherData, errorText, loader } from "./dom";

export class Listeners {
  static #btnToggleWeatherType = document.querySelector("#weatherType");
  static #btnSubmitLocation = document.querySelector("#submitLocation");
  static #form = document.querySelector("form");

  static #preventDefaultForm() {
    this.#form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  static #submitLocation() {
    this.#btnSubmitLocation.addEventListener("click", async () => {
      const location = document.querySelector("#searchLocation");

      loader();

      const weatherData = await getWeatherData(
        location.value,
        this.#btnToggleWeatherType.value,
      );

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

      loader();

      const weatherData = await getWeatherData(
        location.value,
        this.#btnToggleWeatherType.value,
      );

      if (weatherData === 400) {
        errorText(weatherData);
        return;
      }

      renderWeatherData(weatherData);
    });
  }

  static runAll() {
    this.#preventDefaultForm();
    this.#submitLocation();
    this.#toggleWeatherType();
  }
}
