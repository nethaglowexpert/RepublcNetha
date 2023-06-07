// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#back-to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Close hamburger from anywhere
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Slide show swipe
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Slide show otomatis
const testimonialSlide = document.querySelector(".testimonial-slide");
const testimonialItems = Array.from(testimonialSlide.children);
const slideCount = testimonialItems.length;

testimonialItems.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

let currentSlide = 0;
const slideInterval = setInterval(() => {
  moveToSlide((currentSlide + 1) % slideCount);
}, 1000);

function moveToSlide(slideIndex) {
  testimonialSlide.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide = slideIndex;
}

// // Stop slide interval when mouse is over the testimonial section
// const testimonialSection = document.querySelector(".testimonial");
// testimonialSection.addEventListener("mouseenter", () => {
//   clearInterval(slideInterval);
// });

// // Resume slide interval when mouse leaves the testimonial section
// testimonialSection.addEventListener("mouseleave", () => {
//   slideInterval = setInterval(() => {
//     moveToSlide((currentSlide + 1) % slideCount);
//   }, 3000);
// });

// Carosuel script gambar produk
