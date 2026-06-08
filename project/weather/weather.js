
const API_KEY = "b949dbfb8b804b8aa6a50720260806 "; 

const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    if (!res.ok) {
      throw new Error("API not working");
    }

    const data = await res.json();
    renderWeather(data);

  } catch (error) {
    console.log("Error:", error);
    document.getElementById("container").innerHTML =
      "<h3>City not found</h3>";
  }
};

const renderWeather = (data) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${data.location.name}</h2>
    <img src="${data.current.condition.icon}">
    <h3>${data.current.temp_c} °C</h3>
    <p>${data.current.condition.text}</p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Wind: ${data.current.wind_kph} km/h</p>
  `;

  container.appendChild(card);
};

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Enter city name");
    return;
  }

  fetchWeather(city);``
});