
// Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

// Remove Menu
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Background Header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
// let testimonialSwiper = new Swiper(".testimonial-swiper", {
//     spaceBetween: 30,
//     loop: 'true',

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });