// ===== PROJECT NAVIGATION =====
// This handles clicking on projects to navigate to their detail pages

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add click event listeners to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            if (projectId) {
                window.location.href = `${projectId}.html`;
            }
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ===== SMOOTH SCROLLING =====
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== ACTIVE NAVIGATION HIGHLIGHT =====
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // ===== FADE-IN ANIMATION ON SCROLL =====
    // Optional: Add fade-in effect for elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in to project cards and sections
    document.querySelectorAll('.project-card, .card, .resume-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
    
    // ===== IMAGE LAZY LOADING =====
    // Improve performance by lazy loading images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ===== EXTERNAL LINK HANDLING =====
    // Open external links in new tab
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hostname.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ===== FORM VALIDATION (if you add contact forms later) =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });
    
    // ===== SEARCH/FILTER FUNCTIONALITY (optional enhancement) =====
    // You can add this to filter projects by tags
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterTag = this.getAttribute('data-filter');
            const projects = document.querySelectorAll('.project-card');
            
            projects.forEach(project => {
                if (filterTag === 'all') {
                    project.style.display = 'block';
                } else {
                    const tags = project.querySelectorAll('.tag');
                    let hasTag = false;
                    tags.forEach(tag => {
                        if (tag.textContent.toLowerCase() === filterTag.toLowerCase()) {
                            hasTag = true;
                        }
                    });
                    project.style.display = hasTag ? 'block' : 'none';
                }
            });
        });
    });
    
    // ===== DARK MODE TOGGLE (optional enhancement) =====
    // Uncomment and add a toggle button to enable dark mode
    /*
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
    */
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

// Add window resize handler with debounce
window.addEventListener('resize', debounce(function() {
    // Add any resize handling logic here
    console.log('Window resized');
}, 250));

// ===== CONSOLE MESSAGE =====
console.log('Portfolio website loaded successfully! 🚀');
console.log('To customize, edit the HTML, CSS, and JS files.');
