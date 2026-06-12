let products = [];
let editid = null;
let productcontainer = document.getElementById("products");

async function addProductToList() {
  let local = localStorage.getItem("products");

  if (local) {
    products = JSON.parse(local);
    ShowProducts();
    return;
  }

  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("API Cann't be fetched");
    }
    const data = await res.json();
    products = data.products;
    console.log(data.products);
    saveData();
    ShowProducts();

    return;
  } catch (error) {
    console.log(error);
  }
}
addProductToList();

// show product

function ShowProducts() {
  productcontainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productcontainer.innerHTML += ` <div class="bg-white rounded shadow p-4 flex flex-col h-full">

            <img
                src="${product.thumbnail}"
                class="w-full h-48 object-cover rounded"
            >

            <h2 class="font-bold text-lg mt-3">
                ${product.title}
            </h2>

            <p class="text-green-600 font-semibold">
                ₹ ${product.price}
            </p>

            <p class="text-gray-500">
                ${product.category}
            </p>

            <div class="flex gap-2 mt-auto pt-4">

                <button
                    class="edit-btn bg-yellow-500 text-white px-3 py-2 rounded"
                    data-id="${product.id}"
                >
                    Edit
                </button>

                <button
                    class="delete-btn bg-red-500 text-white px-3 py-2 rounded"
                    data-id="${product.id}"
                >
                    Delete
                </button>

            </div>

        </div>`;
  }
  addEditEvents();
  addDeleteEvents();
}
// Add the product
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", AddProduct);

function AddProduct() {
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;
  let category = document.getElementById("category").value;

  if (title == "" || price == "" || image == "" || category == "") {
    alert("All fields are required");
    return;
  }

  let product = {
    id: products.length + 1,
    title: title,
    price: price,
    thumbnail: image,
    category: category,
  };
  products.push(product);
  saveData();
  ShowProducts();
}

// Edit the product
// const editbtn = document.getElementById("edit-btn");
// editbtn.addEventListener("click", editProducts )

// const editbtn = document.getElementsByClassName("edit-btn");
// edit-btn.addEventListener("click", editproducts )

// Edit Product

function addEditEvents() {
  const editBtns = document.getElementsByClassName("edit-btn");

  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", () => {
      editProducts(products[i].id);
    });
  }
}

function editProducts(id) {
  editid = id;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == edited) {
      document.getElementById("title").value = products[i].title;

      document.getElementById("price").value = products[i].price;

      document.getElementById("image").value = products[i].thumbnail;

      document.getElementById("category").value = products[i].category;

      break;
    }
  }
}

// Update the product
const updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", UpdateProduct);

function UpdateProduct() {
  if (editid == null) {
    alert("Select the product first");
    return;
  }

  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;
  let category = document.getElementById("category").value;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == editid) {
      products[i].title = title;
      products[i].price = price;
      products[i].thumbnail = image;
      products[i].category = category;
    }
  }
  saveData();
  ShowProducts();
  editid = null;
}

// delete the value

function addDeleteEvents() {
  const deleteBtns = document.getElementsByClassName("delete-btn");

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
      products.splice(i, 1);

      saveData();
      ShowProducts();
    });
  }
}

// sorting the product

document.getElementById("lowToHigh").addEventListener("click", () => {
  products.sort((a, b) => a.price - b.price);

  ShowProducts();
});

document.getElementById("highToLow").addEventListener("click", () => {
  products.sort((a, b) => b.price - a.price);

  ShowProducts();
});

// search the product

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchProduct);

function searchProduct() {
  let value = document.getElementById("search").value.toLowerCase();

  productcontainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    if (products[i].title.toLowerCase().includes(value)) {
      productcontainer.innerHTML += `
            <div>
                <img src="${products[i].thumbnail}" width="150">

                <h2>${products[i].title}</h2>

                <p>₹ ${products[i].price}</p>

                <p>${products[i].category}</p>
            </div>
            `;
    }
  }
}

function saveData() {
  localStorage.setItem("products", JSON.stringify(products));
}
