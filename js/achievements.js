let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 2000; // time to stay on screen (3 sec)
const transitionDuration = 1000; // CSS transition (1 sec)

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = i < index ? 'translateX(-100%)' : 'translateX(100%)';
  });

  slides[index].classList.add('active');
  slides[index].style.transform = 'translateX(0)';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  setTimeout(nextSlide, slideInterval + transitionDuration);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  setTimeout(nextSlide, slideInterval);
  filterAchievements('technical'); // default tab
});

function filterAchievements(category) {
  const items = document.querySelectorAll('.achievement-item');
  items.forEach(item => {
    item.style.display = item.classList.contains(category) ? 'block' : 'none';
  });
}

function filterAchievements(category, btn) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.tabs button');
    buttons.forEach(button => button.classList.remove('active'));
  
    // Add 'active' class to clicked button
    btn.classList.add('active');
  
    // Get all achievement items
    const items = document.querySelectorAll('.achievement-item');
  
    // Show/hide items based on category
    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';  // Show all
      } else {
        if (item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  }
  
  // On page load, simulate click on 'All' button to show all achievements by default
  window.onload = function() {
    const allBtn = document.querySelector('.tabs button.active');
    if (allBtn) {
      filterAchievements('all', allBtn);
    }
  };
  