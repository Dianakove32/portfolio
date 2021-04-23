
// let sliderIndex = 1;
// let timeout;
// const layers = [...document.querySelectorAll('.layer')];
// const covers = [...document.querySelectorAll('.photo-frame')];

// function changeCoverAnimState(state = 0) {
//   const st = state === 1 ? 'running' : 'paused';
//   covers.forEach(cover => {
//     // cover.style['animation-play-state'] = st;
//     cover.querySelector('.cover').style.width = `${state * 100}%`;
//   });
// }

// function switchLayer(step = 1) {
//   const nextSlide = (sliderIndex + step) % 7 === 0 ? 7 : (sliderIndex + step) % 7;

//   changeCoverAnimState(1);
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     changeCoverAnimState(0)
//   }, 500);

//   for(let i of layers) {
//     i.classList.remove('layer-displayed');
//     i.classList.remove('layer-displayed-exit');
//     if(i.dataset.scene == nextSlide) {
//       i.classList.add('layer-displayed');
//     }
//     if(i.dataset.scene == sliderIndex) {
//       i.classList.add('layer-displayed-exit');
//     }
//   }
//   sliderIndex = nextSlide;
// }




//sda
// var swiper = new Swiper('.blog-slider', {
//   spaceBetween: 30,
//   effect: 'fade',
//   loop: true,
//   mousewheel: {
//     invert: false,
//   },
//   // autoHeight: true,
//   pagination: {
//     el: '.blog-slider__pagination',
//     clickable: true,
//   }
// });

//parall

document.addEventListener("mousemove", parallax);
function parallax (e){
document.querySelectorAll(".object").forEach(function(move){
    var moving_value = move.getAttribute("data-value");

    var x  = (e.clientX * moving_value) / 150;//250
    var y = (e.clientY * moving_value) / 450;//250

    move.style.transform = "translateX("+ x +"px) translateY(" + y + "px)";
  });
}

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 130, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// function getCityLocation (){


//   fetch('https://geolocation-db.com/json/639aa2f0-98c5-11eb-a996-0b3faf254bc0')
//   .then(res=>res.json())
//   .then(data=>console.log(data))

// }
// getCityLocation()