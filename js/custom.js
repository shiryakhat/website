// Custom JavaScript for Shir Ya Khat website

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup crypto address copy functionality
    document.querySelectorAll('.crypto-value').forEach(function(element) {
        element.addEventListener('click', function() {
            const text = this.getAttribute('data-clipboard-text');
            const parent = this.closest('.crypto-address');
            
            // Create temporary textarea element to copy text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            // Show copied feedback
            this.classList.add('copied');
            parent.classList.add('copied');
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.classList.remove('copied');
                parent.classList.remove('copied');
            }, 2000);
        });
    });
    
    // Animated elements
    const animatedElements = document.querySelectorAll('.animated');
    
    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
        animatedElements.forEach(function(element) {
            if (isElementInViewport(element) && !element.classList.contains('fadeIn')) {
                element.classList.add('fadeIn');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Trigger on initial load
    handleScrollAnimation();
    
    // Episode Filter functionality
    const filterButtons = document.querySelectorAll('.btn-filter');
    const episodeItems = document.querySelectorAll('.episode-item');
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide episodes based on filter
            episodeItems.forEach(function(item) {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    const season = item.getAttribute('data-season');
                    if (season === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Navbar animation
    const navbar = document.querySelector('.navbar-fixed-top');
    
    function animateNavbar() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    }
    
    window.addEventListener('scroll', animateNavbar);
    animateNavbar(); // Call on load
    
    // Mobile menu toggle improvement
    const navToggle = document.querySelector('.navbar-toggle');
    const navCollapse = document.querySelector('.navbar-collapse');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navCollapse && navCollapse.classList.contains('in') && !event.target.closest('.navbar')) {
            navToggle.click();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navCollapse && navCollapse.classList.contains('in')) {
                        navToggle.click();
                    }
                }
            }
        });
    });
});