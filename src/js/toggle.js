export function toggle() {
  const weatherType = document.querySelector("#weatherType");
  if (weatherType.value === "metric") {
    weatherType.value = "us";
    weatherType.textContent = "°F";
    weatherType.classList.add("skyblue");
  } else if (weatherType.value === "us") {
    weatherType.value = "metric";
    weatherType.textContent = "°C";
    weatherType.classList.remove("skyblue");
  }

  console.log(weatherType.value);
}
