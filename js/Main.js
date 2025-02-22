document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    function onScroll() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector(`.nav-link[href="#${section.id}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
});

// Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeInSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

// Disable right-click and drag on the profile image
const profileImage = document.querySelector('.profile-bg img');

profileImage.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Disable right-click
});

profileImage.addEventListener('dragstart', (e) => {
    e.preventDefault(); // Disable drag
});

function confirmDownload() {
    const isConfirmed = confirm("Are you sure you want to download the resume?");
    if (isConfirmed) {
        return true; // Proceed with download
    } else {
        return false; // Cancel download
    }
}

// Main.js (Frontend Code)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send form data to the server using fetch
    fetch('http://localhost:3000/send-email', {  // Use the correct URL if it's hosted elsewhere
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('response-message').textContent = 'Error sending message. Please try again later.';
    });
});