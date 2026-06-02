//     navbar      //


const navItems = [
  {
    title: "HOME",
  },

  {
    title: "SHOP",
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
navItems.map((item)=>{

if(item.dropdown){

return `
<li class="relative group">

<a href="#"
class="hover:text-[#ff4f6d] flex items-center gap-1">
${item.title}
</a>

<ul
class="
absolute top-full left-0
w-60 bg-white shadow-lg

opacity-0 invisible
group-hover:opacity-100
group-hover:visible

transition-all duration-300
">

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

if(item.mega){

return `
<li class="relative group">

<a href="#"
class="hover:text-[#ff4f6d] flex items-center gap-1">
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

transition-all duration-300
">

${[1,2,3,4].map(()=>`

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
class="hover:text-[#ff4f6d] flex items-center gap-1">
${item.title}
</a>

</li>
`;

}).join("");



const mobileMenu =
document.getElementById("mobileMenu");

mobileMenu.innerHTML =
navItems.map(item=>`

<li>
<a href="#">
${item.title}
</a>
</li>

`).join("");



const menuBtn =
document.getElementById("menuBtn");

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("hidden");

});


//   Hero section   //




const slides1 = [
  {
    badge: "New Year 2026",
    title: "BEST SHOPPING",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae posuere est Sed placerat ligula",
    img: "./images-home-page/hero-sec-1-img.jpg"
  },
  {
    badge: "Women Fashion",
    title: "NEW COLLECTION",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae posuere est Sed placerat ligula",
    img: "./images-home-page/her-sec-2-img.jpg"
  },
  {
    badge: "Men Collection",
    title: "NEW COLLECTION",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae posuere est Sed placerat ligula",
    img: "./images-home-page/hero-img-3.jpg"
  }
];

const heroSlider = document.getElementById("heroSlider");
let currentSlide = 0;

function showSlide(index) {
  heroSlider.innerHTML = slides1.map((slide, i) => {
    return `
      <div class="${i === index ? 'block' : 'hidden'} relative w-full h-full">

        <img 
          src="${slide.img}" 
          class="w-full h-full object-cover"
        >

        <div class="absolute inset-0 bg-black/55"></div>

        <div class="absolute inset-0 flex items-center justify-center">
          <div class="max-w-full  px-6 ">

            <div class="max-w-[650px] text-white text-center md:text-center">

              <span class="inline-block bg-[#ff4f6d] px-4 py-2 text-sm md:text-base mb-5">
                ${slide.badge}
              </span>

              <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[8px] mb-5">
                ${slide.title}
              </h1>

              <p class="text-sm md:text-lg font-semibold mb-8">
                ${slide.desc}
              </p>

              <div class="flex justify-center gap-4">
                <button class="bg-[#ff4f6d] text-white px-8 py-3 rounded">
                  Shop Now
                </button>

                <button class="bg-white text-[#ff4f6d] px-8 py-3 rounded">
                  Collection
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    `;
  }).join("");

  heroSlider.innerHTML += `
    <button onclick="prevSlide()" 
      class="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white text-2xl">
      ←
    </button>

    <button onclick="nextSlide()" 
      class="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white text-2xl">
      →
    </button>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
      ${slides1.map((_, i) => `
        <button onclick="goToSlide(${i})"
          class="w-8 h-2 ${i === index ? 'bg-[#ff4f6d]' : 'bg-white'}">
        </button>
      `).join("")}
    </div>
  `;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides1.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides1.length - 1;
  }
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(() => {
  nextSlide();
}, 3000);



//  3 sec- watch,shoes , purse

const cardData = [
  {
    image: "./images-home-page/shoes-photo.jpg",
    title: "Shoes",
    collection: "2026 Collection",
    offer: "You Will Love Upto 60% Off"
  },
  {
    image: "./images-home-page/watch.jpg",
    title: "Watch",
    collection: "Sprint Collection",
    offer: "You Will Love Upto 50% Off"
  },
  {
    image: "./images-home-page/purse.jpg",
    title: "Bags",
    collection: "Exclusive Design",
    offer: "You Will Love Upto 20% Off"
  }
];

const contaant = document.getElementById("card-container");

contaant.innerHTML = cardData.map(card => `
  <div class="group relative h-[250px] w-full sm:w-[300px] md:w-[330px] md:h-[330px] overflow-hidden">

    <img
      class="w-full h-full object-cover"
      src="${card.image}"
      alt="${card.title}"
    >

    <!-- Shadow -->
    <div
      class="absolute inset-0
      bg-gradient-to-l from-black/50 to-transparent
      translate-x-full
      group-hover:translate-x-0
      transition-transform duration-700">
    </div>

      <!-- Title -->
    <div
      class="absolute top-[20%] w-full text-center
      text-white text-[18px] sm:text-[20px] md:text-[22px] font-bold z-10">
      ${card.title}
    </div>

     <!-- Hover Content -->
    <div
      class="absolute top-[35%] w-full text-center
      text-white z-10
      opacity-0 translate-y-8
      group-hover:opacity-100
      group-hover:translate-y-0
      transition-all duration-700">

      <p class="text-base md:text-lg font-semibold">
        ${card.collection}
      </p>

      <p class="mt-3 text-sm md:text-base">
        ${card.offer}
      </p>

      <button class="mt-5 bg-red-500 px-3 py-2 sm:px-4 text-sm sm:text-base">
        Shop Now
      </button>

    </div>

  </div>
`).join("");


// 4 sec - all products


const container = document.getElementById("container");
const container2 = document.getElementById("container2")

const fetchAPI = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("API cannot be fetched");
    }

    const data = await res.json();

    renderData(data.products.slice(0,8));
  } catch (error) {
    console.log(error);
  }
};

const renderData = (products) => {
  container.innerHTML = "";
  container2.innerHTML = "";

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
    container2.appendChild(card.cloneNode(true));
  });
};

fetchAPI();

// 5 sec - Winter Flash Sale //

const saleData = {
  image: "./images-home-page/man-3-3.png",
  discount: "40%"
};

const imageContainer =
  document.getElementById("imageContainer");

imageContainer.innerHTML = `
  <div
    class="relative img-div w-full max-w-[370px] h-[494px] bg-[#9FE5E2] rounded-xl overflow-hidden p-4">

    <img
      class="w-full h-full rounded-xl object-cover"
      src="${saleData.image}"
      alt="Winter Sale">

    <div
      class="absolute top-4 left-4 z-10 rounded-full h-[70px] w-[70px] bg-red-500 flex flex-col text-white items-center justify-center">

      <p>${saleData.discount}</p>
      <p>OFF</p>

    </div>

  </div>
`;



// TIMER BOX DATA


const timerData = [
  {
    id: "daysVal",
    label: "Days"
  },
  {
    id: "hoursVal",
    label: "Hours"
  },
  {
    id: "minVal",
    label: "Minutes"
  },
  {
    id: "secVal",
    label: "Seconds"
  }
];

const timerContainer =
  document.getElementById("timerContainer");

timerContainer.innerHTML =
  timerData.map(item => `
    <div
      class="rounded-full h-[70px] w-[70px] md:h-[80px] md:w-[80px] bg-white flex flex-col justify-center items-center">

      <p
        id="${item.id}"
        class="text-[18px] md:text-[21px] font-semibold">
        00
      </p>

      <p class="text-[12px] md:text-[15px]">
        ${item.label}
      </p>

    </div>
  `).join("");



// COUNTDOWN TIMER


const targetDate =
  new Date("December 31, 2028 00:00:00").getTime();

function updateTimer() {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("daysVal").textContent =
    days;

  document.getElementById("hoursVal").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minVal").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("secVal").textContent =
    String(seconds).padStart(2, "0");
}

updateTimer();

setInterval(updateTimer, 1000);


// !-- 7 sec - black- background-sec --> 

const slides2 = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magni neque nisi consectetur quisquam possimus repellendus, quidem cumque sed iusto maiores quam voluptatem laboriosam ipsa dolorum nihil.",
    name: "Michel",
    company: "Themesvila",
    image: "./images-home-page/black-back-man-img.jpg"
  },

  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magni neque nisi consectetur quisquam possimus repellendus, quidem cumque sed iusto maiores quam voluptatem laboriosam ipsa dolorum nihil.",
    name: "John",
    company: "Creative Studio",
    image: "./images-home-page/background-black-man-2-img.jpg"
  },

  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magni neque nisi consectetur quisquam possimus repellendus, quidem cumque sed iusto maiores quam voluptatem laboriosam ipsa dolorum nihil.",
    name: "David",
    company: "Tech World",
    image: "./images-home-page/black-background-girl-img.jpg"
  }
];

let current1 = 0;

const slideText = document.getElementById("slideText");
const slideImage = document.getElementById("slideImage");
const slideName = document.getElementById("slideName");
const slideCompany = document.getElementById("slideCompany");


function showSlide1(index) {

  current1 = index;

  console.log(slides2[index].company);


  slideText.innerHTML = slides2[index].text;
  slideImage.src = slides2[index].image;
  slideName.innerHTML = slides2[index].name;
  slideCompany.innerHTML = slides2[index].company;
}

showSlide1(0);

document.getElementById("next").addEventListener("click", () => {
  showSlide1((current1 + 1) % slides2.length);
});

document.getElementById("prev").addEventListener("click", () => {
  showSlide1((current1 - 1 + slides2.length) % slides2.length);
});


// 8 sec -   our blog   //

const blogs = [
  {
    image: "./images-home-page/our-blog-1.jpg",
    date: "25",
    month: "AUG",
    comments: 2,
    views: 12,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: "Proin in blandit lacus. Nam pellentesque tortor eget dui feugiat venenatis ...."
  },

  {
    image: "./images-home-page/our-blog-2.jpg",
    date: "25",
    month: "AUG",
    comments: 2,
    views: 18,
    title: "Phasellus Pellentesque Viverra Metus,id Euismod Hendrerit",
    desc: "Proin in blandit lacus. Nam pellentesque tortor eget dui feugiat venenatis ....."
  },

  {
    image: "./images-home-page/our-blog - 3.jpg",
    date: "25",
    month: "AUG",
    comments: 2,
    views: 12,
    title: "Nulla Sit Amet Pellentesque Nisl, Non Ultrices Nisl. Vivamus Quis",
    desc: "Proin in blandit lacus. Nam pellentesque tortor eget dui feugiat venenatis ....."
  }
];
const blogCards = document.getElementById("blogCards");

blogCards.innerHTML = blogs.map((blog) => `
  
<div class="bg-white border overflow-hidden">

  <div class="relative">

    <img
      src="${blog.image}"
      alt=""
      class="w-full h-[250px] object-cover">

    <div
      class="absolute right-4 bottom-4 bg-pink-500 text-white px-4 py-3 text-center">

      <p class="font-bold text-lg">${blog.date}</p>
      <p>${blog.month}</p>

    </div>

  </div>

  <div class="p-6">

    <div class="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">

      <span>
        <i class="fa-regular fa-user text-pink-500"></i>
        Admin
      </span>

      <span>
        <i class="fa-regular fa-comments text-pink-500"></i>
        ${blog.comments} Comments
      </span>

      <span>
        <i class="fa-regular fa-eye text-pink-500"></i>
        ${blog.views} Views
      </span>

    </div>

    <h3 class="text-xl font-medium mb-4">
      ${blog.title}
    </h3>

    <p class="text-gray-500 leading-8">
      ${blog.desc}
    </p>

  </div>

</div>

`).join("");



// 9 - sec  all-img sec //


const logos = [
  "./images-home-page/hipsar-1.png",
  "./images-home-page/vintage-2.png",
  "./images-home-page/retro-3.png",
  "./images-home-page/creative-designs-4.png",
  "./images-home-page/cratives-6.png",
  "./images-home-page/vintage-6-2.png"
];

const logoContainer = document.getElementById("logoContainer");

logoContainer.innerHTML = logos.map(logo => `
  <div class="flex justify-center">
    <img
      src="${logo}"
      alt="brand logo"
      class="w-[140px] opacity-60 hover:opacity-100 transition duration-300">
  </div>
`).join("");


//  10 - sec : fre-shipping ,cash on delivery sec 

const services = [
  {
    icon: "fa-solid fa-truck",
    title: "Free Shipping",
    desc: "Best Shipping Service"
  },
  {
    icon: "fa-regular fa-credit-card",
    title: "Cash On Delivery",
    desc: "Fast Delivery Method"
  },
  {
    icon: "fa-solid fa-headset",
    title: "Support 24/7",
    desc: "24 Hours a Day"
  },
  {
    icon: "fa-regular fa-clock",
    title: "30 Days Return",
    desc: "Simply Return 30 Days"
  }
];

const serviceContainer = document.getElementById("serviceContainer");

serviceContainer.innerHTML = services.map((service) => `
  <div class="border border-gray-200 h-48 flex flex-col items-center justify-center text-center">
    <i class="${service.icon} text-red-400 text-3xl mb-4"></i>
    <h3 class="text-xl font-semibold">${service.title}</h3>
    <p class="text-gray-400 text-sm mt-2">${service.desc}</p>
  </div>
`).join("");


//  11 sec - footer // 

const footerData = {
  contacts: [
    {
      icon: "fa-location-dot",
      text: `4060 Reppert Coal Road Jackson,<br>MS 39201 USA`
    },
    {
      icon: "fa-mobile-screen",
      text: `(+123) 685 78<br>(+064) 987 245`
    },
    {
      icon: "fa-message",
      text: `contact@yoursite.com<br>support@yoursite.com`
    }
  ],

  information: [
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Condition",
    "Contact Us"
  ],

  services: [
    "Returns",
    "Site Map",
    "Wish List",
    "My Account",
    "Order History"
  ],

  socialIcons: [
    "facebook-f",
    "pinterest-p",
    "linkedin-in",
    "twitter",
    "instagram"
  ],

  payments: [
    "./images-home-page/visa-png.png",
    "./images-home-page/master-card.png",
    "./images-home-page/american-express.png",
    "./images-home-page/apple-pay.png"
  ]
};



const footerContainer =
document.getElementById("footerContainer");

footerContainer.innerHTML = `

<div class="main-div-footer bg-black w-full">

<div class="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between py-15 px-5 lg:py-24 lg:px-16 gap-10">

<!-- Contact -->

<div class="w-full lg:w-[280px]">

<h4 class="text-red-600 text-[20px] mb-8">
Contacts
</h4>

<ul class="space-y-6">

${footerData.contacts.map(item => `
<li class="text-white leading-7">
<i class="fa-solid ${item.icon} mr-2"></i>
${item.text}
</li>
`).join("")}

</ul>

</div>

<!-- Information -->

<div>

<h4 class="text-red-600 text-[20px] mb-8">
Information
</h4>

<ul class="text-white space-y-5">

${footerData.information.map(item => `
<li class="hover:text-red-500 cursor-pointer">
${item}
</li>
`).join("")}

</ul>

</div>

<!-- Services -->

<div>

<h4 class="text-red-600 text-[20px] mb-8">
Services
</h4>

<ul class="text-white space-y-5">

${footerData.services.map(item => `
<li class="hover:text-red-500 cursor-pointer">
${item}
</li>
`).join("")}

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

${footerData.socialIcons.map(icon => `
<li>
<a href=""
class="w-10 h-10 rounded-full border border-[#ffffff26] flex items-center justify-center text-[#B7B7B7] hover:bg-pink-500 hover:text-white">

<i class="fa-brands fa-${icon}"></i>

</a>
</li>
`).join("")}

</ul>

<!-- Copyright -->

<div class="text-white text-center">
Copyright © 2026 RapidShop, All rights Reserved.
</div>

<!-- Payment -->

<div class="flex flex-wrap">

${footerData.payments.map(img => `
<img
src="${img}"
class="w-[30px] h-[30px] bg-white p-1 rounded"
/>
`).join("")}

</div>

</div>

</div>
`;




