const API_KEY = "b949dbfb8b804b8aa6a50720260806";

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

    document.getElementById("container").innerHTML = `
      <div class="bg-red-100 text-red-600 p-4 rounded-xl font-semibold">
        City not found
      </div>
    `;
  }
};

const renderWeather = (data) => {
  const container = document.getElementById("container");

  container.innerHTML = "";

  const card = document.createElement("div");

 card.className =
  "bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50";

  card.innerHTML = `
    <h2 class="text-3xl font-bold text-gray-800 mb-2">
      ${data.location.name}
    </h2>

    <p class="text-gray-500 mb-4">
      ${data.location.country}
    </p>

    <img
      src="${data.current.condition.icon}"
      alt="Weather Icon"
      class="mx-auto w-24 h-24"
    >

    <h3 class="text-3xl font-bold text-blue-600 my-3">
      ${data.current.temp_c}°C
    </h3>

    <p class="text-lg font-medium text-gray-700 mb-6">
      ${data.current.condition.text}
    </p>

    <div class="grid grid-cols-2 gap-4">

      <div class="bg-white p-4 rounded-2xl shadow">
        <p class="text-sm text-gray-500">
          Humidity
        </p>
        <p class="text-1xl font-bold text-blue-500">
          ${data.current.humidity}%
        </p>
      </div>

      <div class="bg-white p-4 rounded-2xl shadow ">
        <p class="text-sm text-gray-500">
          Wind
        </p>
        <p class="text-1xl font-bold text-green-500 ">
          ${data.current.wind_kph} km/h
        </p>
      </div>

    </div>
  `;

  container.appendChild(card);
};

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Enter city name");
    return;
  }

  fetchWeather(city);
});