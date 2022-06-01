// My slider
const slides = document.querySelector(".slider-wrapper").children;
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const indicator = document.querySelectorAll(".indicator");
let index = 0;

for (var i = 0; i < prev.length; i++) {
  prev[i].onclick = function(){
    prevSlide();
  };
}

for (var i = 0; i < next.length; i++) {
  next[i].onclick = function(){
    nextSlide();
  };
}



function prevSlide () {
  if(index == 0) {
    index=slides.length-1;
  } else {
    index--;
  }
  changeSlide();
}
function nextSlide () {
  if(index === slides.length-1) {
    index=0;
  } else {
    index++;
  }
  changeSlide();
}

function changeSlide () {
  for(let i=0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}


$('.slider-block').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});
$('.slider-block2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});