// About page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-percent');
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

const imagePaths = [
   
    "images/rangoliwin.jpg",
    "images/rangoli.jpg",
   "images/dipex.jpg",
   "images/MEET.jpg",
    "images/startuppitch.jpg",
 
    "images/rangoliwin1.jpg"
    

];

let currentImage = 0;
const imgElement = document.getElementById("aboutSlider");

setInterval(() => {
    // Step 1: Add zoom-out class
    imgElement.classList.add("zoom-out");

    // Step 2: Wait for animation to end, then change image
    setTimeout(() => {
        currentImage = (currentImage + 1) % imagePaths.length;
        imgElement.src = imagePaths[currentImage];

        // Step 3: Remove zoom-out and add zoom-in class
        imgElement.classList.remove("zoom-out");
        imgElement.classList.add("zoom-in");

        // Step 4: Remove zoom-in class after animation
        setTimeout(() => {
            imgElement.classList.remove("zoom-in");
        }, 500);
    }, 500); // match zoomOut duration
}, 2500); // change image every 3.5s including animation
document.addEventListener("DOMContentLoaded", function () {
    const animatedHeadings = document.querySelectorAll(".animated-heading");

    animatedHeadings.forEach(heading => {
        const text = heading.getAttribute("data-text");
        heading.innerHTML = ''; // Clear existing text

        // Create span for each letter
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerHTML = (char === ' ') ? '&nbsp;' : char;
            span.style.opacity = 0;
            span.style.display = 'inline-block';
            span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            span.style.transitionDelay = `${index * 60}ms`;
            heading.appendChild(span);
        });
    });

    function animateOnScroll() {
        animatedHeadings.forEach(heading => {
            const headingTop = heading.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (headingTop < windowHeight - 100) {
                const spans = heading.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.opacity = 1;
                    span.style.transform = 'translateY(0)';
                });
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on load
});
