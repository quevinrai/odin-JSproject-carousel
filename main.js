const img1 = "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80";
const img2 = "https://images.unsplash.com/photo-1554310603-d39d43033735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
const img3 = "https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
const img4 = "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
const slideshow = [img1, img2, img3, img4];

const imgCarousel = document.querySelector(".carousel img");
const carouselImg1 = document.querySelector(".carousel-img1");
const carouselImg2 = document.querySelector(".carousel-img2");
const carouselCount = document.querySelector(".carousel-count");
const btnArrowPrev = document.querySelector(".arrow-left");
const btnArrowNext = document.querySelector(".arrow-right");
const btnSelections = document.querySelectorAll(".carousel-selections a");

const sliderVars = {
  cnt: 0,
  isLoaded: false,
  sliderArrowStr: "next",
};

let slideshowTimer;

function startImageSlider() {
  slideshowTimer = setInterval(loadImageSlider, 5000);
}

function stopImageSlider() {
  clearInterval(slideshowTimer);
}

function loadImageSlider() {
  if (!sliderVars.isLoaded) {
    carouselImg2.classList.remove("hide");
    sliderVars.cnt++;
    sliderVars.isLoaded = true;
  }
  
  else {
    if (sliderVars.cnt < 0) sliderVars.cnt = 3;
    else if (sliderVars.cnt > slideshow.length - 1) sliderVars.cnt = 0; 
  }
    
  carouselCount.textContent = `${sliderVars.cnt + 1} / ${slideshow.length}`;
    for (i = 0; i < slideshow.length; i++) {
      if (i === sliderVars.cnt) btnSelections[i].classList.add("selected");
      else btnSelections[i].classList.remove("selected");
    }

    if (sliderVars.cnt % 2 == 0) carouselImg1.src = slideshow[sliderVars.cnt];
    else carouselImg2.src = slideshow[sliderVars.cnt];
    carouselImg1.classList.toggle("animate-hide-img");
    carouselImg2.classList.toggle("animate-hide-img");
  
  sliderVars.cnt++;

}

window.addEventListener("load", () => {
  startImageSlider();
});

btnArrowPrev.addEventListener("click", () => {
  sliderVars.cnt -= 2;
  stopImageSlider();
  loadImageSlider();
  startImageSlider();
});

btnArrowNext.addEventListener("click", () => {
  stopImageSlider();
  loadImageSlider();
  startImageSlider();
});

btnSelections.forEach((btnSelection, index) => {
  btnSelection.addEventListener("click", (e) => {
    e.preventDefault();
    sliderVars.cnt = index;
    stopImageSlider();
    loadImageSlider();
    startImageSlider();
  });
});