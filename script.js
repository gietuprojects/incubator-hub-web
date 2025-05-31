
// KIPM Innovators Foundation - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(6, 18, 59, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--navy-blue)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Startup filter functionality
    const filterButtons = document.querySelectorAll('.btn-filter');
    const startupItems = document.querySelectorAll('.startup-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            startupItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // Validation
        let isValid = true;
        let errorMessage = '';

        if (!firstName) {
            isValid = false;
            errorMessage += 'First name is required.\n';
        }

        if (!lastName) {
            isValid = false;
            errorMessage += 'Last name is required.\n';
        }

        if (!email) {
            isValid = false;
            errorMessage += 'Email is required.\n';
        } else if (!isValidEmail(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        if (!subject) {
            isValid = false;
            errorMessage += 'Please select a subject.\n';
        }

        if (!message) {
            isValid = false;
            errorMessage += 'Message is required.\n';
        }

        if (isValid) {
            // Simulate form submission
            showSuccessMessage();
            contactForm.reset();
        } else {
            alert(errorMessage);
        }
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Success message function
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success alert-dismissible fade show';
        successDiv.innerHTML = `
            <strong>Success!</strong> Your message has been sent successfully. We'll get back to you soon.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(successDiv, form);
        
        // Auto-remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .amenity-card, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-item h3, .impact-item h4');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const isRupees = target.includes('₹');
            const isPercentage = target.includes('%');
            
            let finalNumber;
            if (isRupees) {
                finalNumber = parseFloat(target.replace('₹', '').replace('Cr', ''));
            } else if (isPercentage) {
                finalNumber = parseInt(target.replace('%', ''));
            } else {
                finalNumber = parseInt(target.replace('+', ''));
            }

            let current = 0;
            const increment = finalNumber / 100;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= finalNumber) {
                    current = finalNumber;
                    clearInterval(timer);
                }
                
                let displayValue;
                if (isRupees) {
                    displayValue = '₹' + current.toFixed(1) + 'Cr';
                } else if (isPercentage) {
                    displayValue = Math.floor(current) + '%';
                } else {
                    displayValue = Math.floor(current) + '+';
                }
                
                counter.textContent = displayValue;
            }, 20);
        });
    }

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // Mobile menu close on link click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroLogo = document.querySelector('.hero-logo');
        
        if (heroLogo) {
            const rate = scrolled * -0.5;
            heroLogo.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') return;
            
            const originalText = this.textContent;
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1500);
        });
    });

    console.log('KIPM Innovators Foundation website loaded successfully!');
});

// Additional utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});
