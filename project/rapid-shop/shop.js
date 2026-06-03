import { renderNavbar } from "./navbar.js";

renderNavbar();




const container = document.getElementById("container");

const fetchAPI = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("API cannot be fetched");
    }

    const data = await res.json();

    renderData(data.products);
  } catch (error) {
    console.log(error);
  }
};

const renderData = (products) => {
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");

    card.className =
      "bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative group";

    card.innerHTML = `
      <div class="relative">
        <span class="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 z-10">
          SALE
        </span>

        <img 
          src="${product.thumbnail}" 
          class="w-full h-64 object-contain bg-gray-50 p-4"
        />

        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center gap-3">
          <button class="w-10 h-10 bg-white rounded-full">🔍</button>
          <button class="w-10 h-10 bg-white rounded-full">♡</button>
          <button class="w-10 h-10 bg-white rounded-full">🛒</button>
        </div>
      </div>

      <div class="text-center bg-white p-5">
        <p class="text-yellow-400 mb-2">★★★★★</p>

        <h2 class="font-semibold text-gray-700 mb-2">
          ${product.title}
        </h2>

        <p>
          <span class="font-bold text-lg">$${product.price}</span>
          <span class="line-through text-gray-400 ml-2">
            $${Math.round(product.price + 20)}
          </span>
        </p>

        <a 
          href="all-div-2.html?id=${product.id}"
          class="inline-block mt-3 text-sm font-semibold hover:text-red-500"
        >
          + View Details
        </a>
      </div>
    `;

    container.appendChild(card);
  });
};

fetchAPI();