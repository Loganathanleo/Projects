const toggleButton = document.querySelector(".toggle-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-button");

toggleButton.addEventListener("click", function () {
  mobileMenu.style.display = "flex";
});

closeButton.addEventListener("click", function () {
  mobileMenu.style.display = "none";
  console.log("yes");
});

function checkScreenWidth() {
  if (window.innerWidth > 750) {
    mobileMenu.style.display = "none";
  }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);
function animateCounter(targetNumber) {
  const counterElement = document.getElementById("counter");
  const duration = 2000; // Animation duration in milliseconds
  const start = 0;
  const increment = (targetNumber / duration) * 10; // Increment calculation

  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      clearInterval(timer);
      current = targetNumber;
    }
    counterElement.textContent = Math.floor(current);
  }, 10); // Update every 10 milliseconds
}

animateCounter(1200);

document.getElementById("whatsapp").addEventListener("change", function () {
  var alternateNumber = document.getElementById("alternateNumber");
  var lab = document.getElementById("showalter");
  if (this.checked) {
    alternateNumber.style.display = "block";
    lab.style.display = "block";
  } else {
    alternateNumber.style.display = "none";
    lab.style.display = "none";
  }
});


document.getElementById("join").addEventListener("click", function () {
  var don = document.getElementById("donatebox");
  var donfor = document.getElementById("donatefor");
  don.style.display = "none";
  donfor.classList.add("active");
  donfor.style.display = "flex";
});

// JavaScript for  Carousel

const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const indicators = document.querySelectorAll('.indicator');
const slidesContainer = document.querySelector('.video-slides');
const slides = document.querySelectorAll('.video-slide');

let currentIndex = 0;
let intervalId;

function resetVideo() {
  const videos = slidesContainer.querySelectorAll('video');
  videos.forEach((video) => {
    video.currentTime = 0;
  });
}

function goToSlide(index) {
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  indicators[currentIndex].classList.remove('active');
  indicators[index].classList.add('active');
  currentIndex = index;
  resetVideo();
}

function goToNextSlide() {
  const currentlyPlayingVideo = slides[currentIndex].querySelector('video');
  if (!currentlyPlayingVideo.paused) {
    return; // Stop advancing slideshow if the current video is not paused
  }

  if (currentIndex === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
}

function goToPrevSlide() {
  const currentlyPlayingVideo = slides[currentIndex].querySelector('video');
  if (!currentlyPlayingVideo.paused) {
    return; // Stop advancing slideshow if the current video is not paused
  }

  if (currentIndex === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

function startSlideShow() {
  intervalId = setInterval(goToNextSlide, 10000); // Change the interval duration as needed (in milliseconds)
}

function stopSlideShow() {
  clearInterval(intervalId);
}

nextButton.addEventListener('click', () => {
  stopSlideShow();
  goToNextSlide();
});

prevButton.addEventListener('click', () => {
  stopSlideShow();
  goToPrevSlide();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    stopSlideShow();
    goToSlide(index);
  });
});

slides.forEach((slide) => {
  const video = slide.querySelector('video');
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

slides.forEach((slide) => {
  const video = slide.querySelector('video');
  video.addEventListener('ended', () => {
    resetVideo();
    goToNextSlide();
  });
});

startSlideShow();

function toggleAnswer(cardBody) {
  cardBody.style.display = (cardBody.style.display === 'none') ? 'block' : 'none';
}
