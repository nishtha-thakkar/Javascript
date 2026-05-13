//  srool down effect

// window.addEventListener("scroll", () =>{
//     if(window.scrollY > 150){
//         console.log("scrolling....")
//     }
// } );

const box = document.getElementById("box");

window.addEventListener("scroll" , () =>{
    if(window.scrollY > 300){
        box.style.background = "pink";
        box.style.transform = "scale(1.5)";
        box.classList.add("scrolled");
    }else{
         box.style.background = "white";
        box.style.transform = "scale(1)";
        // box.style.border = "solid red"
        box.classList.remove("scrolled")

    }
})