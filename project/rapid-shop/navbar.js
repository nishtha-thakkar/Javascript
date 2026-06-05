// navbar.js

export function renderNavbar() {

  const navbar = document.getElementById("navbar");

  navbar.innerHTML = `
  <nav class="bg-white shadow-sm relative z-50">

    <div class="max-w-[1200px] mx-auto px-4">

      <div class="flex items-center justify-between h-24">

        <!-- Logo -->
        <div>
          <img
            src="./images-home-page/logo-navbar.png"
            alt="Logo">
        </div>

        <!-- Desktop Menu -->
        <ul
          id="desktopMenu"
          class="hidden lg:flex items-center gap-8 font-medium">
        </ul>

        <!-- Right Icons -->
        <div class="hidden lg:flex items-center gap-4">

          <button
            class="w-10 h-10 rounded-full bg-[#ff4f6d] text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

          <div class="relative group">

            <button
              class="w-10 h-10 rounded-full bg-gray-100">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

            <span
              class="absolute -top-2 right-0 text-sm">
              2
            </span>

            <!-- Cart Dropdown -->
            <div
              class="absolute right-0 top-14 w-[320px]
              bg-white shadow-xl
              opacity-0 invisible
              group-hover:opacity-100
              group-hover:visible
              transition-all duration-300 z-50">

              <div class="p-4 border-b flex gap-3">

                <img
                  src="./images-home-page/navbar-men-cart-img.jpg"
                  class="w-16 h-16">

                <div>
                  <h4>This is Product Name</h4>
                  <p>1 x $25.00</p>
                </div>

              </div>

              <div class="p-4 border-b flex gap-3">

                <img
                  src="./images-home-page/navbar-cart-2-man-img.jpg"
                  class="w-16 h-16">

                <div>
                  <h4>This is Product Name</h4>
                  <p>1 x $25.00</p>
                </div>

              </div>

              <div class="p-4">

                <h3 class="font-bold mb-4">
                  Subtotal $50.00
                </h3>

                <button
                  class="w-full bg-[#ff4f6d]
                  text-white py-3 rounded-full">
                  Checkout
                </button>

              </div>

            </div>

          </div>

        </div>

        <!-- Mobile Button -->
        <button
          id="menuBtn"
          class="lg:hidden text-3xl">
          ☰
        </button>

      </div>

      <!-- Mobile Menu -->
      <ul
        id="mobileMenu"
        class="hidden lg:hidden pb-6 space-y-4">
      </ul>

    </div>

  </nav>
  `;

  const navItems = [
    {
      title: "HOME",
      link: "main.html",
       
    },

    {
      title: "SHOP",
      link:"main.html",
      dropdown: [
        "PRODUCT DETAILS",
        "CART",
        "CHECKOUT",
        "WISHLIST",
        "ACCOUNT",
      ],
    },

    {
      title: "MEN",
      mega: true,
    },

    {
      title: "WOMEN",
      mega: true,
    },

    {
      title: "PAGES",
      dropdown: [
        "LEFT SIDEBAR BLOG",
        "RIGHT SIDEBAR BLOG",
        "FULL WIDTH BLOG",
        "BLOG DETAILS",
        "ABOUT US",
        "CONTACT US",
        "404 PAGE",
      ],
    },

    {
      title: "CONTACT",
    },
  ];

  const desktopMenu =
    document.getElementById("desktopMenu");

  desktopMenu.innerHTML =
    navItems.map((item) => {


      if (item.title === "HOME") {
  return `
    <li>
      <a href="main.html"
        class="hover:text-[#ff4f6d]">
        ${item.title}
      </a>
    </li>
  `;
}

      if (item.dropdown) {

        return `
        <li class="relative group">

          <a href="${item.link || `#`}"
            class="hover:text-[#ff4f6d]">
            ${item.title}
          </a>

          <ul
            class="
            absolute top-full left-0
            w-60 bg-white shadow-lg
            opacity-0 invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all duration-300">

            ${item.dropdown.map(sub => `
              <li class="hover:bg-gray-100">

                <a href="shop.html"
                  class="block px-6 py-3">
                  ${sub}
                </a>

               

              </li>
            `).join("")}

          </ul>

        </li>
        `;
      }

      if (item.mega) {

        return `
        <li class="relative group">

          <a href="#"
            class="hover:text-[#ff4f6d]">
            ${item.title}
          </a>

          <div
            class="
            absolute top-full left-[-200px]
            bg-white shadow-xl
            w-[850px]
            grid grid-cols-4
            gap-10
            p-8
            opacity-0 invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all duration-300">

            ${[1,2,3,4].map(() => `
              <div>

                <h3
                  class="font-semibold mb-4 border-b pb-2">
                  CATEGORY
                </h3>

                <ul class="space-y-3 text-gray-500">

                  <li>BLAZERS</li>
                  <li>JACKETS</li>
                  <li>COLLECTIONS</li>
                  <li>T-SHIRTS</li>
                  <li>JENS PANT'S</li>
                  <li>SPORTS SHOES</li>

                </ul>

              </div>
            `).join("")}

          </div>

        </li>
        `;
      }

      return `
      <li>

        <a href="#"
          class="hover:text-[#ff4f6d]">
          ${item.title}
        </a>

      </li>
      `;

    }).join("");

  const mobileMenu =
    document.getElementById("mobileMenu");

  mobileMenu.innerHTML =
    navItems.map(item => `
      <li>
        <a href="#">
          ${item.title}
        </a>
      </li>
    `).join("");

  document
    .getElementById("menuBtn")
    .addEventListener("click", () => {

      mobileMenu.classList.toggle("hidden");

    });
}