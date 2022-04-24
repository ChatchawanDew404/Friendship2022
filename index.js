let menu = document.querySelector('.menu-bar')
let navbar = document.querySelector('.navbar')


menu.addEventListener('click',() =>{
    navbar.classList.toggle('active')
})

// Swiper .js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode:true,
  loop: true,
  centeredSlides:true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    567: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  }
});


// Animation text
var options = {
  strings: ['Chatchawan Ngernthaworn','Frontend Developer', 'Web Developer'],
  typeSpeed: 40,
backSpeed:60,
loop:true
};

var typed = new Typed('.animation-text', options);






//   Image filter section
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value =='all'){
            $('.gallery-item').show('1000');
        }
        else{
            $('.gallery-item').not('.' + value).hide('1000');
            $('.gallery-item').filter('.' + value).slideDown('1000');
    }
    })
})

// Add active
$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})









  // Gallery.html Load more
