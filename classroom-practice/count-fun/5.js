// <!-- 1.counter task -->
//      <!-- inc dec -->



const text = document.getElementById("text")
const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
let count1 =0;

inc.addEventListener("click" , () => {
    if(count1 <15){
    count1++
    text.innerHTML= count1
    }
});
dec.addEventListener("click" , () => {
    if(count1 <16){
    count1--
    text.innerHTML= count1
    }
});




// 2. Change Background Color
// Question

// Click button → body background color changes.

const btn = document.getElementById("btn")
btn.addEventListener("click" , () =>{
    document.body.style.backgroundColor = "pink";
})

// 4. Array Print Using forEach
// Question

// Print all fruits inside div.

const text2 = document.getElementById("text2")
const arr = ["apple" , "banana" , "guava"]

arr.forEach((item) => {
    const p = document.createElement("p");
    p.innerHTML = item;
    text2.appendChild(p)
})



// Filter Even Numbers
// Question

// Filter only even numbers.

// Answer
// const arr = [1,2,3,4,5,6,7,8];

// const even = arr.filter((num) => num % 2 === 0);

// console.log(even);

const text3 = document.getElementById("text3");

let arr2 = [1,2,3,4,5,6,7,8,9,10];

const even = arr2.filter((num) => num % 2 === 0);

text3.innerHTML = even;









// 8. setInterval Task
// Question

// Print counting every second

const div = document.getElementById ("div")
const button = document.getElementById("button")
let counter = 0

button.addEventListener("click" ,() => {
    setInterval(() =>{
        if(counter < 15){
            counter++
            div.innerHTML = counter

        }

    }, 1000);
} )


// Question

// Button click → image hide/show.

const bttn = document.getElementById("bttn")
const img = document.getElementById("img")

bttn.addEventListener("click" , () =>{
    if(img.style.display === "none"){
        img.style.display ="block"
    }else{
        img.style.display ="none"

    }
})


// Save username in localStorage.

// Answer
// localStorage.setItem("name", "Nishtha");

// const data = localStorage.getItem("name");

// console.log(data);


const para = document.getElementById("para")

localStorage.setItem("usrname" , "nishtha");
const data = localStorage.getItem("usrname");
console.log(data)

para.innerHTML = data;




// Question

// When scroll down → box color changes.

// Answer
// window.addEventListener("scroll", () => {

//     if(window.scrollY > 200){
//         document.body.style.background = "yellow";
//     }else{
//         document.body.style.background = "white";
//     }

// });

window.addEventListener("scroll" , () =>  {
    if(window.scrollY > 150){
        document.body.style.backgroundColor = "yellow";
    }else{
        document.body.style.backgroundColor = "white";


    }
})


// Question

// Add two numbers from input.

// Answer
// <input type="number" id="num1">
// <input type="number" id="num2">

// <button id="btn">Add</button>

// <h1 id="ans"></h1>

// <script>
// document.getElementById("btn").addEventListener("click", () => {

//     const n1 =
//     Number(document.getElementById("num1").value);

//     const n2 =
//     Number(document.getElementById("num2").value);

//     document.getElementById("ans").innerHTML =
//     n1 + n2;



