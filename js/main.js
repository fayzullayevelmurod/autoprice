var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".slider_btn_right",
      prevEl: ".slider_btn_left",
    },
});
  
var swiper = new Swiper(".mySwiperOne", {
    navigation: {
      nextEl: ".slider_btn_right_one",
      prevEl: ".slider_btn_left_one",
    },
});


const request_call = document.querySelector('.request_call');
const modal_red_bg = document.querySelector('.modal_red_bg');
const modal_red = document.querySelector('.modal_red');
const close_btn = document.querySelector('.close_btn');


request_call.addEventListener('click', () => {
  modal_red_bg.classList.toggle('active');
  modal_red.classList.toggle('active');
});


modal_red_bg.addEventListener('click', () => {
  modal_red_bg.classList.remove('active');
  modal_red.classList.remove('active');
});


close_btn.addEventListener('click', () => {
  modal_red_bg.classList.remove('active');
  modal_red.classList.remove('active');
});


