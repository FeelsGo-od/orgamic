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
  // variableWidth: true,
  responsive: [
    // {
    //   breakpoint: 936,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1
    //   }
    // }
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider-block2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});