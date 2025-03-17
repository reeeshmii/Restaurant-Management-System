let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".home-slider", {
grabCursor:true,
loop:true,
autoplay: {
        delay:  4000,       // Time in milliseconds (3 seconds)
        disableOnInteraction: false, // Keeps autoplay even after user interaction
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    var swiper = new Swiper(".food-slider", {
grabCursor:true,
loop:true,
centeredSlides:true,
spaceBetween:20,

 navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      

 pagination: {
 
        el: ".swiper-pagination",
        clickable: true,
      },
       breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        700: {
          slidesPerView: 2,
          
        },
        1000: {
          slidesPerView: 3,
          
        },
      },
    });


        var swiper = new Swiper(".blogs-slider", {
grabCursor:true,
loop:true,
centeredSlides:true,
spaceBetween:20,
autoHeight:true,
 navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
 pagination: {
 
        el: ".swiper-pagination",
        clickable: true,
      },
       breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        700: {
          slidesPerView: 2,
          
        },
        1000: {
          slidesPerView: 3,
          
        },
      },
    });


    
/* Scroll Animation */
window.addEventListener("scroll", function() {
  var menuSection = document.querySelector(".menu");
  var sectionPosition = menuSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    menuSection.classList.add("visible");
  }
});
