
        // Toggle Mobile Menu
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
    
        menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        });
        let countdown = 3; // Set the timer in seconds
        const timerElement = document.getElementById("timer");

        const interval = setInterval(() => {
        countdown -= 1;
        timerElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            document.querySelector(".preloader").style.display = "none";
        }
    }, 1000); // Updates every second
    

    const slides = document.getElementById('carousel-slides');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
let currentIndex = 0;

function updateCarousel() {
  const offset = currentIndex * -100; // Calculate the offset
  slides.style.transform = `translateX(${offset}%)`; // Update the transform
}

// Handle Previous Button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  updateCarousel();
});

// Handle Next Button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.children.length;
  updateCarousel();
});
  

function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const phoneRegex = /^[0-9]{10,15}$/;
      
      // Name validation
      if (!name) {
        alert('Please enter your name');
        return false;
      }

      // Email validation
      if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email');
        return false;
      }

      // Phone number validation
      if (!phone || !phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return false;
      }

      // Message validation
      if (!message) {
        alert('Please enter a message');
        return false;
      }

      // If all validations pass
      return true;
    }
    


    // Scroll-Up Button Logic
    const scrollUpButton = document.getElementById('scrollUpButton');

    // Toggle visibility based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollUpButton.classList.remove('hidden');
      } else {
        scrollUpButton.classList.add('hidden');
      }
    });

    // Smooth scroll to the top on button click
    scrollUpButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

