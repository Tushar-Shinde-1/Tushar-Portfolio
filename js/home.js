// Home page specific JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Create background elements
    const homeSection = document.getElementById('home');
    const bgElement1 = document.createElement('div');
    const bgElement2 = document.createElement('div');

    bgElement1.classList.add('home-bg-element');
    bgElement2.classList.add('home-bg-element');

    homeSection.appendChild(bgElement1);
    homeSection.appendChild(bgElement2);

    // Typewriter effect for title (letter-by-letter)
    const titleElement = document.querySelector('.description-box h1');
    const originalText = titleElement.textContent.trim();
    
    titleElement.textContent = ''; // Clear existing text

    let i = 0;
    const typeWriter = setInterval(function () {
        if (i < originalText.length) {
            titleElement.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 80); // Adjust speed as needed
});
