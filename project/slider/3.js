const nature = [
  { id: 1, name: "Flowers" },
  { id: 2, name: "Herbs/Creepers"},
  { id: 3, name: "Earth/Sky",  },
  { id: 4, name: "Weather/Time" },
];


const btn = document.getElementById("btn")
const box = document.getElementById("box")

btn.addEventListener("click" , () =>{
    box.innerHTML = "";
     nature.forEach((nat) =>{
        const p = document.createElement("p");
        p.innerHTML = `${nat.name}`;
        box.appendChild(p);
    })

});




 let currentSlide = 0;

        const slides = document.querySelectorAll(".swiper-slide");

        const nextBtn = document.querySelector(".swiper-button-next");

        const prevBtn = document.querySelector(".swiper-button-prev");



        function showSlide(index) {

            slides.forEach((slide) => {
                slide.classList.add("hidden");
            });

            slides[index].classList.remove("hidden");
        }



        function nextSlide() {

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            showSlide(currentSlide);
        }



        function prevSlide() {

            currentSlide--;

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            showSlide(currentSlide);
        }



    
        nextBtn.addEventListener("click", nextSlide);


        prevBtn.addEventListener("click", prevSlide);



        setInterval(nextSlide, 3000);



        showSlide(currentSlide);






    

