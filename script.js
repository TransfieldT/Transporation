// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once animated
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate
document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission handler
const form = document.getElementById('quoteForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const originalText = btn.textContent;

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const craneType = document.getElementById('crane-type').value;
    const message = document.getElementById('message').value;

    // Format message for WhatsApp
    const whatsappMessage = `*New Quote Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Crane Capacity:* ${craneType}%0A*Project Details:* ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6589276729&text=${whatsappMessage}`;

    // Update button state
    btn.textContent = 'Redirecting...';
    btn.style.opacity = '0.8';
    btn.disabled = true;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form and button after a short delay
    setTimeout(() => {
        btn.textContent = 'Request Sent!';
        btn.style.backgroundColor = '#4CAF50';

        form.reset();

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 3000);
    }, 1000);
});
