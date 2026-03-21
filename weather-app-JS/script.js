async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

  let geoData = await fetch(geoURL).then((res) => res.json());

  if (!geoData.results) {
    alert("city not found");
    return;
  }

  let { latitude, longitude, name } = geoData.results[0];
  console.log(latitude);
  console.log(longitude);
  console.log(name);

  let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m`;
  let weatherData = await fetch(weatherURL).then((res) => res.json());
  let w = weatherData.current_weather;
  document.getElementById("city").innerText = name;
  document.getElementById("temp").innerText = w.temperature + "°C";
  document.getElementById("wind").innerText = w.windspeed + "km/h";

  let currentHour = new Date().getHours();
  let humidity = weatherData.hourly.relative_humidity_2m[currentHour];
  document.getElementById("humidity").innerText = humidity + "%";

  let iconMap = {
    0: "./images/sun.png",
    1: "./images/partly-cloudy-day.png",
    2: "./images/cloud.png",
    45: "./images/fog-day.png",
    48: "./images/fog-night.png",
    51: "./images/rain.png",
    61: "./images/rain.png",
    71: "./images/snow.png",
    95: "./images/storm.png",
  };

  document.getElementById("weatherIcon").src =
    iconMap[w.weathercode] || iconMap[0];
}
