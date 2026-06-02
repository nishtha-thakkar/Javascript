const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const fetchSingleProduct = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    const product = await res.json();

    showDetails(product);
  } catch (error) {
    console.log(error);
  }
};

const showDetails = (product) => {
  const details = document.getElementById("details");

  details.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img 
        src="${product.thumbnail}" 
        class="w-full h-96 object-contain bg-gray-100 p-5"
      />

      <div>
        <h1 class="text-3xl font-bold mb-4">${product.title}</h1>

        <h2 class="text-2xl font-bold mb-3">$${product.price}</h2>

        <p class="mb-2"><b>Brand:</b> ${product.brand}</p>
        <p class="mb-2"><b>Category:</b> ${product.category}</p>
        <p class="mb-2"><b>Rating:</b> ${product.rating}</p>

        <p class="text-gray-600 mt-4">
          ${product.description}
        </p>

        <button class="mt-6 bg-black text-white px-6 py-3">
          Add To Cart
        </button>
      </div>
    </div>
  `;
};

fetchSingleProduct();