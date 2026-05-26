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

fetchSingleProduct();

const showDetails = (product) => {

  const details = document.getElementById("details");

  details.innerHTML = `
    <h1>${product.title}</h1>

    <img src="${product.thumbnail}" width="300">
    <h2>Price: ${product.price}</h2>
    <h3>Brand: ${product.brand}</h3>
    <h4>Availability: ${product.availabilityStatus}</h4>
    <p><b>Category:</b> ${product.category}</p>
    <p>Rating: ${product.rating}</p>
    <p>${product.description}</p>
  `;
};