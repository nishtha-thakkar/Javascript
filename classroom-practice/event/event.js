//1.// button - to click the button and print javascipt

// const btn = document.getElementById("btn");
// const text = document.getElementById("text")

// btn.addEventListener("click" , () => {
//    text.innerHTML = "JAVASCRIPT";


// });

//2.// select first p tag

// const para = document.querySelector(".p1");
// para.innerHTML = "HELLO";



//3.// select all p tag

// const para = document.querySelectorAll(".p1");

// para.forEach((item) =>{
//     item.innerHTML = "HELLO"
// });


// 4. 

const techStack = [
  { id: 1, tech: "JavaScript", version: 7 },
  { id: 2, tech: "HTML", version: 5 },
  { id: 3, tech: "ReactJs", version: 18 },
  { id: 4, tech: "CSS", version: 3 },
];

const btn2 = document.getElementById("btn2");
const box1 = document.getElementById("box");

btn2.addEventListener("click" , () =>{
    box1.innerHTML = "";
    techStack.forEach((tech) =>{
        const p = document.createElement("p");
        p.innerHTML = `${tech.tech}`;
        box1.appendChild(p);
    })
})





