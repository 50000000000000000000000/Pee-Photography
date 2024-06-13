// Array of image URLs
const images = [];
for (let i = 1; i <= 10000; i++) {
    images.push(`https://example.com/images/${i}.jpg`);  // Update with your image paths
}

const slideshowContainer = document.querySelector('.slideshow');

// Function to create slide elements
function createSlides() {
    images.forEach(src => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        const img = document.createElement('img');
        img.src = src;
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    });
}

// Initialize slideshow
createSlides();

let currentIndex = 0;

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);
