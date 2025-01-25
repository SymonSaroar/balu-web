cur = -1;
let numOfSlides = 5;
let slideDelay = 5000;
let sliderTimeout;
let slides;
let indicator;
$(document).ready(function () {
  $(".logo-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $("#indicator li a:not(.anim)").remove();
  $(".menubar").click(function () {
    if ($("nav").hasClass("visible")) $("nav").removeClass("visible");
    else $("nav").addClass("visible");
  });
  showNextSlide();
});
function showNextSlide() {
  slides = document.getElementsByClassName("slides");
  indicator = document.getElementById("indicator");
  // caption = document.getElementById('slide-caption');
  if (slides.length == 0 || indicator == null) {
    console.log("returned");
    sliderTimeout = setTimeout(showNextSlide, 100);
    return;
  }
  cur++;
  cur %= numOfSlides;
  let prev = (cur - 1 + numOfSlides) % numOfSlides;
  let pprev = (cur - 2 + numOfSlides) % numOfSlides;
  let now = cur;
  indicators = indicator.getElementsByTagName("li");
  // captions = caption.getElementsByTagName('p');
  if (indicators.length == 0) {
    console.log("returned");
    sliderTimeout = setTimeout(showNextSlide, 100);
    return;
  }
  indicators[prev].className = indicators[prev].className.replace(
    " active",
    ""
  );
  indicators[now].className += " active";
  // captions[prev].className = captions[prev].className.replace(" active", "");
  // captions[now].className += " active";
  // slides[prev].style.display = "none";
  // slides[now].style.display = "block";
  slides[now].style.height = "100%";
  slides[now].style.opacity = "1";
  slides[prev].style.height = "0";
  slides[prev].style.opacity = "0.4";
  // slides[now].style.animation = "slide-fade 1s ease-in";
  console.log("step", cur);
  sliderTimeout = setTimeout(showNextSlide, slideDelay);
}
let set = [];
for (let i = 0; i < numOfSlides; i++) {
  set.push(function () {
    cur = i - 1;
    clearTimeout(sliderTimeout);
    for (let j = 0; j < numOfSlides; j++) {
      slides[j].style.height = "0";
      slides[j].style.opacity = "0.4";
      // captions[j].className = captions[j].className.replace(" active", "");
      indicators[j].className = indicators[j].className.replace(" active", "");
    }
    showNextSlide();
  });
}
function slideNext() {
  cur %= numOfSlides;
  clearTimeout(sliderTimeout);
  for (let j = 0; j < numOfSlides; j++) {
    slides[j].style.height = "0";
    slides[j].style.opacity = "0.4";
    // captions[j].className = captions[j].className.replace(" active", "");
    indicators[j].className = indicators[j].className.replace(" active", "");
  }
  showNextSlide();
}
function slidePrev() {
  cur -= 2;
  cur += numOfSlides;
  cur %= numOfSlides;
  console.log("previous", cur);
  clearTimeout(sliderTimeout);
  for (let j = 0; j < numOfSlides; j++) {
    slides[j].style.height = "0";
    slides[j].style.opacity = "0.4";
    // captions[j].className = captions[j].className.replace(" active", "");
    indicators[j].className = indicators[j].className.replace(" active", "");
  }
  showNextSlide();
}
