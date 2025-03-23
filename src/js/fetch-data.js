export async function getWeatherData(location, temp) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${temp}&key=Z9LSHACV63BKHTZZM8KTJJ75J&contentType=json`,
    );

    if (!response.ok) throw response.status;
    const weatherData = await response.json();

    return weatherData;
  } catch (err) {
    return err;
  }
}
