// Toggle light/dark mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Ensure the index is within bounds
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    // Calculate the offset to show the current slide
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);
