
//  navbar //

import { renderNavbar } from "./navbar.js";

renderNavbar();

const container = document.getElementById("details");

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
      "bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group";

    card.innerHTML = `
      <div class="relative">

        <span class="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
          SALE
        </span>

        <img
          src="${product.thumbnail}"
          alt="${product.title}"
          class="w-full h-60 object-contain bg-gray-50 p-4"
        />

        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center gap-3">

          <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            🔍
          </button>

          <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            ♡
          </button>

          <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            🛒
          </button>

        </div>

      </div>

      <div class="p-5 text-center">

        <p class="text-yellow-500 mb-2">
          ★★★★★
        </p>

        <h2 class="font-semibold text-lg text-gray-700 mb-3 h-14 flex items-center justify-center">
          ${product.title}
        </h2>

        <p class="mb-4">
          <span class="font-bold text-xl">
            $${product.price}
          </span>

          <span class="line-through text-gray-400 ml-2">
            $${Math.round(product.price + 20)}
          </span>
        </p>

        <a
          href="all-div-2.html?id=${product.id}"
          class="text-red-500 font-semibold hover:underline"
        >
          + View Details
        </a>

      </div>
    `;

    container.appendChild(card);
  });
};

fetchAPI();


//  11 sec - footer //

const footerData = {
  contacts: [
    {
      icon: "fa-location-dot",
      text: `4060 Reppert Coal Road Jackson,<br>MS 39201 USA`,
    },
    {
      icon: "fa-mobile-screen",
      text: `(+123) 685 78<br>(+064) 987 245`,
    },
    {
      icon: "fa-message",
      text: `contact@yoursite.com<br>support@yoursite.com`,
    },
  ],

  information: [
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Condition",
    "Contact Us",
  ],

  services: ["Returns", "Site Map", "Wish List", "My Account", "Order History"],

  socialIcons: [
    "facebook-f",
    "pinterest-p",
    "linkedin-in",
    "twitter",
    "instagram",
  ],

  payments: [
    "./images-home-page/visa-png.png",
    "./images-home-page/master-card.png",
    "./images-home-page/american-express.png",
    "./images-home-page/apple-pay.png",
  ],
};

const footerContainer = document.getElementById("footerContainer");

footerContainer.innerHTML = `

<div class="main-div-footer bg-black w-full">

<div class="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between py-15 px-5 lg:py-24 lg:px-16 gap-10">

<!-- Contact -->

<div class="w-full lg:w-[280px]">

<h4 class="text-red-600 text-[20px] mb-8">
Contacts
</h4>

<ul class="space-y-6">

${footerData.contacts
  .map(
    (item) => `
<li class="text-white leading-7">
<i class="fa-solid ${item.icon} mr-2"></i>
${item.text}
</li>
`,
  )
  .join("")}

</ul>

</div>

<!-- Information -->

<div>

<h4 class="text-red-600 text-[20px] mb-8">
Information
</h4>

<ul class="text-white space-y-5">

${footerData.information
  .map(
    (item) => `
<li class="hover:text-red-500 cursor-pointer">
${item}
</li>
`,
  )
  .join("")}

</ul>

</div>

<!-- Services -->

<div>

<h4 class="text-red-600 text-[20px] mb-8">
Services
</h4>

<ul class="text-white space-y-5">

${footerData.services
  .map(
    (item) => `
<li class="hover:text-red-500 cursor-pointer">
${item}
</li>
`,
  )
  .join("")}

</ul>

</div>

<!-- Newsletter -->

<div class="w-full lg:w-[450px]">

<h4 class="text-red-600 text-[20px] mb-8">
Join Us Newsletter
</h4>

<p class="text-white mb-8">
Lorem ipsum dolor sit amet consectetur adipiscing elit.
</p>

<form class="flex w-full overflow-hidden rounded-md">

<input
type="email"
placeholder="Enter Your Email"
class="w-full px-5 py-4 outline-none text-gray-600"
/>

<button
class="bg-pink-500 px-6 text-white">

<i class="fa-regular fa-paper-plane text-[22px]"></i>

</button>

</form>

</div>

</div>

<div class="border-t border-gray-700"></div>

<div class="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-10 px-5 lg:px-16">

<!-- Social -->

<ul class="flex gap-3 flex-wrap">

${footerData.socialIcons
  .map(
    (icon) => `
<li>
<a href=""
class="w-10 h-10 rounded-full border border-[#ffffff26] flex items-center justify-center text-[#B7B7B7] hover:bg-pink-500 hover:text-white">

<i class="fa-brands fa-${icon}"></i>

</a>
</li>
`,
  )
  .join("")}

</ul>

<!-- Copyright -->

<div class="text-white text-center">
Copyright © 2026 RapidShop, All rights Reserved.
</div>

<!-- Payment -->

<div class="flex flex-wrap">

${footerData.payments
  .map(
    (img) => `
<img
src="${img}"
class="w-[30px] h-[30px] bg-white p-1 rounded"
/>
`,
  )
  .join("")}

</div>

</div>

</div>
`;

// footer-scrool up

const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// -------------------------------------------
// ----------------------------------------------
