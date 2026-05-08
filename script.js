// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.work-card, .skill-item, .section-header, .about-left, .contact-title, .contact-text, .contact-links').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// CTA button
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 50
        ? 'rgba(255,255,255,0.95)'
        : 'rgba(255,255,255,0.7)';
});
