let icon =document.querySelector('#icon')
let hide =document.querySelector('.menu')
icon.addEventListener('click', function(){
    hide.classList.toggle('is-active')
});
var swiper = new Swiper(".mySwiper", {
    speed:3000,
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
  });