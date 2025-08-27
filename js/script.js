// ===== DOM CONTENT LOADED EVENT =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSubtleBackground();
    initMobileMenu();
    initFormValidation();
    initSmoothScrolling();
    initScrollEffects();
    initServiceCardAnimations();
    initActiveNavigation();

    // Initialize typing effect only on home page
    if (document.querySelector('.hero-title .title-line')) {
        initTypingEffect();
    }
});

// ===== SUBTLE BACKGROUND =====
function initSubtleBackground() {
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createSubtleParticle(particleContainer);
    }
}

function createSubtleParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'subtle-particle';

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Subtle colors for white theme
    const colors = ['rgba(37, 99, 235, 0.1)', 'rgba(5, 150, 105, 0.1)', 'rgba(234, 88, 12, 0.1)'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Smaller, more subtle particles
    const size = Math.random() * 2 + 1;

    particle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${Math.random() * 0.3 + 0.1};
        animation: subtleFloat ${Math.random() * 30 + 20}s linear infinite;
    `;

    container.appendChild(particle);

    // Remove and recreate particle when animation ends
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
            createSubtleParticle(container);
        }
    }, (Math.random() * 30 + 20) * 1000);
}

// ===== MOBILE MENU FUNCTIONALITY =====
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Update ARIA attributes
        const isExpanded = navToggle.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);

        // Prevent body scroll when menu is open
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// ===== FORM VALIDATION =====
function initFormValidation() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Validate all fields
        let isValid = true;
        
        if (!validateName(nameInput.value)) {
            showError('nameError', 'Lütfen geçerli bir ad soyad giriniz.');
            isValid = false;
        }
        
        if (!validateEmail(emailInput.value)) {
            showError('emailError', 'Lütfen geçerli bir e-posta adresi giriniz.');
            isValid = false;
        }
        
        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            showError('phoneError', 'Lütfen geçerli bir telefon numarası giriniz.');
            isValid = false;
        }
        
        if (!validateMessage(messageInput.value)) {
            showError('messageError', 'Lütfen en az 10 karakter uzunluğunda bir mesaj giriniz.');
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            showSuccessMessage();
            form.reset();
        }
    });

    // Real-time validation
    nameInput.addEventListener('blur', function() {
        if (this.value && !validateName(this.value)) {
            showError('nameError', 'Lütfen geçerli bir ad soyad giriniz.');
        } else {
            clearError('nameError');
        }
    });

    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            showError('emailError', 'Lütfen geçerli bir e-posta adresi giriniz.');
        } else {
            clearError('emailError');
        }
    });

    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            showError('phoneError', 'Lütfen geçerli bir telefon numarası giriniz.');
        } else {
            clearError('phoneError');
        }
    });

    messageInput.addEventListener('blur', function() {
        if (this.value && !validateMessage(this.value)) {
            showError('messageError', 'Lütfen en az 10 karakter uzunluğunda bir mesaj giriniz.');
        } else {
            clearError('messageError');
        }
    });
}

// ===== VALIDATION FUNCTIONS =====
function validateName(name) {
    return name.trim().length >= 2 && /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(name.trim());
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.trim());
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// ===== ERROR HANDLING FUNCTIONS =====
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    const inputElement = errorElement.previousElementSibling;
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#e74c3c';
}

function clearError(errorId) {
    const errorElement = document.getElementById(errorId);
    const inputElement = errorElement.previousElementSibling;
    
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    inputElement.style.borderColor = '#e1e5e9';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const inputElements = document.querySelectorAll('.form-group input, .form-group textarea');
    
    errorElements.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
    
    inputElements.forEach(input => {
        input.style.borderColor = '#e1e5e9';
    });
}

function showSuccessMessage() {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 212, 255, 0.1));
            color: var(--primary-green);
            padding: 1.5rem;
            border-radius: 15px;
            border: 2px solid var(--primary-green);
            margin-bottom: 2rem;
            text-align: center;
            font-family: var(--font-primary);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
            animation: slideInFromTop 0.5s ease-out;
        ">
            <i class="fas fa-check-circle" style="margin-right: 0.5rem; font-size: 1.2rem;"></i>
            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
        </div>
    `;

    // Insert success message before the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successDiv, form);

    // Add slide in animation
    const messageElement = successDiv.querySelector('div');
    messageElement.style.animation = 'fadeInUp 0.5s ease-out';

    // Remove success message after 7 seconds
    setTimeout(() => {
        messageElement.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            successDiv.remove();
        }, 500);
    }, 7000);

    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', throttle(function() {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.borderBottomColor = 'rgba(37, 99, 235, 0.2)';
            header.style.backdropFilter = 'blur(30px)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
            header.style.transform = 'translateY(0)';
        } else {
            header.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95))';
            header.style.borderBottomColor = 'rgba(37, 99, 235, 0.1)';
            header.style.backdropFilter = 'blur(25px)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            header.style.transform = 'translateY(0)';
        }
    }, 16));

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe about info items
    const aboutElements = document.querySelectorAll('.about .info-item');
    aboutElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        element.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s`;
        observer.observe(element);
    });

    // Observe contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) scale(1) !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== SERVICE CARD ANIMATIONS =====
function initServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        // Add hover sound effect (visual feedback)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';

            // Add glow effect
            const cardGlow = this.querySelector('.card-glow');
            if (cardGlow) {
                cardGlow.style.opacity = '0.1';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';

            // Remove glow effect
            const cardGlow = this.querySelector('.card-glow');
            if (cardGlow) {
                cardGlow.style.opacity = '0';
            }
        });

        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-15px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            }, 150);
        });
    });
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const titleLines = document.querySelectorAll('.hero-title .title-line');

    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';

        // Add cursor
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.animation = 'blink 1s infinite';
        cursor.style.color = 'var(--primary-green)';

        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                line.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(typeInterval);
                // Remove cursor after typing is complete
                setTimeout(() => {
                    if (cursor.parentNode) {
                        cursor.remove();
                    }
                }, 1000);
            }
        }, 100 + (index * 50)); // Stagger the typing

        line.appendChild(cursor);
    });

    // Add blink animation for cursor
    const blinkStyle = document.createElement('style');
    blinkStyle.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(blinkStyle);
}

// ===== ENHANCED FORM INTERACTIONS =====
function enhanceFormInputs() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

    inputs.forEach(input => {
        // Add focus glow effect
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)';
            this.style.borderColor = 'var(--primary-green)';
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.boxShadow = 'none';
                this.style.borderColor = 'rgba(0, 255, 136, 0.2)';
            }
        });

        // Add typing sound effect (visual feedback)
        input.addEventListener('input', function() {
            this.style.transform = 'scale(1.01)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// ===== PARALLAX EFFECT =====
function initParallaxEffect() {
    window.addEventListener('scroll', throttle(function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    }, 16));
}

// ===== SMOOTH BUTTON INTERACTIONS =====
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// ===== ACTIVE NAVIGATION =====
function initActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== SMOOTH SCROLLING FOR SAME PAGE LINKS =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    enhanceFormInputs();
    initParallaxEffect();
    initButtonEffects();
});

// ===== UTILITY FUNCTIONS =====
// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Optimize scroll events with throttling
window.addEventListener('scroll', throttle(function() {
    // Any additional scroll-based functionality can be added here
}, 16)); // ~60fps

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.loading = 'lazy'; // Native lazy loading
    });
}

// Initialize image preloading
preloadImages();

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Add focus management for mobile menu
function initAccessibility() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add ARIA attributes
    navToggle.setAttribute('aria-label', 'Menüyü aç/kapat');
    navToggle.setAttribute('aria-expanded', 'false');

    // Update ARIA attributes when menu toggles
    navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Ana içeriğe geç';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2c5aa0;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });

    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
}

// Initialize accessibility features
initAccessibility();

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You can add error reporting here
});

// ===== BROWSER COMPATIBILITY =====
// Check for IntersectionObserver support
if (!window.IntersectionObserver) {
    // Fallback for older browsers
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });

    const aboutElements = document.querySelectorAll('.about .info-item');
    aboutElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
}
