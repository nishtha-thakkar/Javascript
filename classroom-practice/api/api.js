const fetchAPI = async() =>{

    try{
        const res = await fetch("https://dummyjson.com/products")
        if(!res.ok){
            throw new Error ("API CAN NOT BE FATCHED");
        }
        const data = await res.json();
        console.log(data.products)
        renderData(data.products.slice(0,8))
        return data;
    }catch(error){
        console.log("EROOR :" ,error )
    }

};

fetchAPI();

const renderData = (products)=> {
    console.log(products);

    const container = document.getElementById("container")
    container.innerHTML = "";

    products?.forEach((product) => {
        
        const card = document.createElement("div");
        card.innerHTML = `
       <h1> ${product?.title} </h1>
       <img src = ${product?.thumbnail}>
       <button id = "btn" > Show More </button>
`;

const btn = card.querySelector("#btn")
       btn.addEventListener("click" , () => {
      window.location.href = `all-div-2.html?id=${product.id}`;

        
        })




        container.appendChild(card)
    })
}
renderData();