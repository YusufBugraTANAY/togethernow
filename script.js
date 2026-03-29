document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle Feature
    const langBtn = document.getElementById('lang-toggle');
    const htmlTag = document.getElementById('html-tag');
    let currentLang = 'de'; // Default language

    const langElements = document.querySelectorAll('.lang-text');

    langBtn.addEventListener('click', () => {
        // Toggle language state
        currentLang = currentLang === 'de' ? 'en' : 'de';
        htmlTag.setAttribute('lang', currentLang);
        langBtn.textContent = currentLang === 'de' ? 'EN' : 'DE';

        // Update all text elements
        langElements.forEach(el => {
            const newText = el.getAttribute(`data-${currentLang}`);
            if (newText) {
                el.innerText = newText;
            }
        });
    });

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
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                
                // Add staggered delay processing if element has data-delay
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    entry.target.style.transitionDelay = delay;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
