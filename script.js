// Dark/Light Mode Toggle Function
function toggleTheme() {
  const body = document.body;
  const themeToggleBtn = document.getElementById("theme-toggle");

  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    themeToggleBtn.textContent = "🌙 Dark Mode";
  } else {
    body.classList.replace("dark-mode", "light-mode");
    themeToggleBtn.textContent = "🌞 Light Mode";
  }
}
function downloadCV() {
  window.open('./resummeeeeee/assets/muir,Allan2024.pdf', '_blank');
}
// Mobile Navigation Toggle Function
// Array of images for the carousel
const images = [
  { src: '/resummeeeeee/assets/pic4.jpeg', alt: 'Image 1' },
  { src: '/resummeeeeee/assets/allanheadshot.jpeg', alt: 'Image 2' },
  { src: '/resummeeeeee/assets/pic2.jpeg', alt: 'Image 3' },
  { src: '/resummeeeeee/assets/pic5.jpeg', alt: 'Image 4' },
  { src: '/resummeeeeee/assets/pic1.jpeg', alt: 'Image 5' },
  { src: '/resummeeeeee/assets/pic10.jpeg', alt: 'Image 6' },
  { src: '/resummeeeeee/assets/Image 1.jpeg', alt: 'Image 7' },
];

const container = document.getElementById('carousel-container');
let currentSlide = 0;
let autoSlideInterval;

// Dynamically load images into the carousel
function loadImages() {
  images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    if (index === 0) slide.classList.add('active'); // First slide is active
    slide.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
    container.appendChild(slide);
  });
}

// Function to show a specific slide
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Manual slide navigation
function moveSlide(direction) {
  showSlide(currentSlide + direction);
  resetAutoSlide(); // Reset auto-slide timer
}

// Auto-slide logic
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize carousel
function initCarousel() {
  loadImages();
  startAutoSlide();
}

document.addEventListener('DOMContentLoaded', initCarousel);

