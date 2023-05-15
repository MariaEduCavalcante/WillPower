/* const slides = document.querySelector(".slider-inner-container").children;

let sobre = 0;
function autoPlay(){
  nextSlide();
  updateDotIndicator();
}
function nextSlide(){
  if (sobre == slides.length - 1) {
     index = 0;
  }
  else{
     sobre++;
  }
  changeSlide();
}
function changeSlide(){
  for(let i=0; i < slides.length; i++){
     slides[i].classList.remove("active");
  }
  slides[sobre].classList.add("active");
}
let timer = setInterval(autoPlay, 5000);*/